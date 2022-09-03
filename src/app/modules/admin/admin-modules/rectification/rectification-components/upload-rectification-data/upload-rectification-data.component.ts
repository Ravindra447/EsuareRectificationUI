import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TitlesService } from '../../../../../../Services/Titles-Icons-Manage/titles.service';
import { IconsService } from '../../../../../../Services/Titles-Icons-Manage/icons.service';

import * as XLSX from 'xlsx';
import * as _moment from 'moment';
const moment = _moment;

import { ToastrService } from 'ngx-toastr';
import { RectificationService } from '../../../../../../services/API/rectification.service';

@Component({
  selector: 'app-upload-rectification-data',
  templateUrl: './upload-rectification-data.component.html',
  styleUrls: ['./upload-rectification-data.component.scss'],
})
export class UploadRectificationDataComponent implements OnInit {
  spinnerloader: Boolean = false;

  @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Choose File';
  file: any;
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  finalData = [];
  errorLength = 0;
  //ngx-pagination
  pageSizeOptions: number[] = [5, 10, 25, 100];
  p: number = 1;

  constructor(public titleService: TitlesService,
    public iconService: IconsService,
    private apiService: RectificationService,
    private toastr: ToastrService) { }

  ngOnInit() { }
  pagination(event) {
    this.p = event;
  }
  uploadFileEvt(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
      this.fileAttr = '';
      this.fileAttr = event.target.files[0].name;
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const bstr = e.target.result;
        const wb = XLSX.read(JSON.parse(JSON.stringify(bstr)), { type: 'binary', cellDates: true });
        // wb.Workbook.WBProps.date1904;
        this.finalData = [];
        wb.SheetNames.forEach((sheet => {
          let rowObject = XLSX.utils.sheet_to_json(wb.Sheets[sheet], {
            raw: false,
          });
          this.finalData = rowObject;
        }))
        this.finalData.map(item => {
          item['user_id']=JSON.parse(localStorage.getItem('userDetails')).user_id;
          if (item.DateOfComplaint == undefined || item.DateOfComplaint == "") {
            item['error'] = "DateOfComplaint is required";
            this.errorLength++;
          } else if (moment(item.DateOfComplaint).format('DD/MM/YYYY') == "Invalid date") {
            item['error'] = "DateOfComplaint is Invalid";
            this.errorLength++;
          } else {
            item.DateOfComplaint = moment(item.DateOfComplaint).format('DD/MM/YYYY');
          }
          if (item.Status == "Rectified" && (item.DateOfRectification == undefined || item.DateOfRectification == "")) {
            this.errorLength++;
            item['error'] = "DateOfRectification is required";
          } else if (moment(item.DateOfRectification).format('DD/MM/YYYY') == "Invalid date") {
            item['error'] = "DateOfRectification is Invalid";
            this.errorLength++;
          } else if (item.DateOfRectification != undefined && item.DateOfRectification != "") {
            item.DateOfRectification = moment(item.DateOfRectification).format('DD/MM/YYYY');
          } else {
            item.DateOfRectification = "";
          }
        });
        console.log(this.finalData, this.errorLength);
      };
      reader.readAsBinaryString(event.target.files[0]);
    } else {
      this.fileAttr = 'Choose File';
    }
  }
  uploadFun() {
    if (this.errorLength == 0 && this.finalData.length > 0) {
      this.spinnerloader = true;
      this.apiService.createRectification(this.finalData).subscribe((result: any) => {
        if (result.success) {
          this.spinnerloader = false;
          this.toastr.info(result.msg);
        }
      }, error => {
        this.spinnerloader = false;
        this.toastr.error('Internal server error.');
      })

    } else {
      if (this.errorLength != 0) {
        this.toastr.error('File contains errors');
      }
      if (this.finalData.length == 0) {
        this.toastr.info('File contains no data');
      }
    }
  }
  removefile() {
    this.fileInput.nativeElement.value = '';
    this.fileAttr = 'Choose File';
    this.errorLength = 0;
    this.finalData = [];
  }
  downloadSampleXLXSFile() {
    let data = [{
      NameOfULB: '',
      District: '',
      WardNo: '',
      Location: '',
      PoleNumber: '',
      Wattage: '',
      CauseOfComplaint: '',
      DateOfComplaint: '',
      DateOfRectification: '',
      Category: '',
      Status: ''
    }]
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'rectification.xlsx');
  }
  goBack() {
    window.history.back();
  }

}
