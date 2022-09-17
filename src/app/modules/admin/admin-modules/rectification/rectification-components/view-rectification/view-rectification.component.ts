import { Component, OnInit } from '@angular/core';
import { TitlesService } from '../../../../../../Services/Titles-Icons-Manage/titles.service';
import { IconsService } from '../../../../../../Services/Titles-Icons-Manage/icons.service';
import { RectificationService } from '../../../../../../services/API/rectification.service';
import { DataShareService } from '../../../../../../services/Utils/data-share.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateRectificationComponent } from '../update-rectification/update-rectification.component';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import * as moment from 'moment';

@Component({
  selector: 'app-view-rectification',
  templateUrl: './view-rectification.component.html',
  styleUrls: ['./view-rectification.component.scss'],
})
export class ViewRectificationComponent implements OnInit {
  spinnerloader: Boolean = false;
  showAdd: Boolean = true;
  finalData: any = [];
  userDetails: any;
  p: number = 1;
  rectType: String = '';
  rectificationDates = ['DateOfComplaint', 'DateOfRectification', 'Pending', 'Rectified'];
  selectedDate: '';
  rectificationData: any = [];
  constructor(public titleService: TitlesService,
    private dataShareService: DataShareService,
    private apiService: RectificationService,
    public dialog: MatDialog,
    private toastr: ToastrService,
    public iconService: IconsService) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (this.userDetails.user_role === 'user') {
      this.showAdd = false;
    }
    this.fetchRectifications();
  }
  onSelectionChange(event) {
    this.rectType = event.value;
    this.filterRectBy(this.rectType, this.selectedDate);

  }
  checkDate(event) {
    this.selectedDate = event
    this.filterRectBy(this.rectType, this.selectedDate);
  }
  filterRectBy(type, date) {
    this.p = 1;
    this.rectType = type;
    this.selectedDate = date;
    if ((type == 'DateOfComplaint' || type == 'DateOfRectification') && date != '') {
      this.finalData = this.rectificationData.filter((item) => {
        return (item[type] == moment(date).format('MM/DD/YYYY'));
      })
    } else if ((type == 'Pending') && date != '') {
      this.finalData = this.rectificationData.filter((item) => {
        return (item.Status == type && (item.DateOfComplaint == moment(date).format('MM/DD/YYYY')));
      })
    }
    else if ((type == 'Rectified') && date != '') {
      this.finalData = this.rectificationData.filter((item) => {
        return (item.Status == type && (item.DateOfRectification == moment(date).format('MM/DD/YYYY')));
      })
    }
    else if (date != '') {
      this.finalData = this.rectificationData.filter((item) => {
        return (item.DateOfComplaint == moment(date).format('MM/DD/YYYY') || item.DateOfRectification == moment(date).format('MM/DD/YYYY'));
      })
    }
    else if (type == 'Pending' || type == 'Rectified') {
      this.finalData = this.rectificationData.filter((item) => {
        return (item.Status == type);
      })
    } else {
      this.finalData = this.rectificationData;
    }
  }
  pagination(event) {
    this.p = event;
  }
  editFun(item) {
    console.log(item);
    this.dataShareService.changeData(item);
    const dialogRef = this.dialog.open(UpdateRectificationComponent, {
      minWidth: '400px',
      maxWidth: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  deleteFun(item) {
    console.log(item);
    this.spinnerloader = true;
    this.apiService.deleteRectificationById(item._id).subscribe((result: any) => {
      if (result.success) {
        this.finalData.splice(this.finalData.findIndex(obj => obj._id === item._id), 1);
        this.spinnerloader = false;
        this.toastr.warning(result.msg);
      }
    }, error => {
      this.spinnerloader = false;
      this.toastr.error('Internal server error.');
    })
  }
  fetchRectifications() {
    this.spinnerloader = true;
    this.apiService.fetchAllRectifications().subscribe((result: any) => {
      if (result.success) {
        this.spinnerloader = false;
        if (this.userDetails.user_role != 'super_admin')
          this.rectificationData = result.data.reverse().filter((item) => {
            return item.NameOfULB.toLowerCase() == this.userDetails.user_ulb.toLowerCase()
          });
        else
          this.rectificationData = result.data.reverse();

        this.filterRectBy('', '');
      }
    }, error => {
      this.spinnerloader = false;
    })
  }
  downloadSampleXLXSFile() {
    let data = this.finalData;
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, 'rectification.xlsx');
  }
}
