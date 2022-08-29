import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TitlesService } from '../../../../../../Services/Titles-Icons-Manage/titles.service';
import { IconsService } from '../../../../../../Services/Titles-Icons-Manage/icons.service';

import * as XLSX from 'xlsx';

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
  constructor(public titleService: TitlesService,
    public iconService: IconsService) { }

  ngOnInit() { }

  uploadFileEvt(event: any) {
    console.log(event)
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
      this.fileAttr = '';
      this.fileAttr = event.target.files[0].name;
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const bstr = e.target.result;
        const wb = XLSX.read(JSON.parse(JSON.stringify(bstr)), { type: 'binary' });
        let finalData = [];
        wb.SheetNames.forEach((sheet => {
          let rowObject = XLSX.utils.sheet_to_json(wb.Sheets[sheet], {
            raw: false,
           });
          finalData.push(rowObject);
        }))
        console.log(finalData)
      };
      reader.readAsBinaryString(event.target.files[0]);
    } else {
      this.fileAttr = 'Choose File';
    }
  }
  uploadFun() {
    this.fileInput.nativeElement.value = '';
  }
  downloadSampleXLXSFile(){
    let data=[{
      NameOfULB:'',
      District:'',
      WardNo:'',
      Location:'',
      PoleNumber:'',
      Wattage:'',
      CauseOfComplaint:'',
      DateOfComplaint:'',
      DateOfRectification:'',
      Category:'',
      Status:''
    }]
    const ws: XLSX.WorkSheet =XLSX.utils.json_to_sheet(data);
 
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, 'rectification.xlsx');
  }
  goBack() {
    window.history.back();
  }

}
