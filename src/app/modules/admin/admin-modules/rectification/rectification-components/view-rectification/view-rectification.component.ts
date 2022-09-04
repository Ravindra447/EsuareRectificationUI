import { Component, OnInit } from '@angular/core';
import { TitlesService } from '../../../../../../Services/Titles-Icons-Manage/titles.service';
import { IconsService } from '../../../../../../Services/Titles-Icons-Manage/icons.service';
import { RectificationService } from '../../../../../../services/API/rectification.service';
import { DataShareService } from '../../../../../../services/Utils/data-share.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateRectificationComponent } from '../update-rectification/update-rectification.component';
import { ToastrService } from 'ngx-toastr';

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
          this.finalData = result.data.filter((item) =>{
            return item.NameOfULB.toLowerCase() == this.userDetails.user_ulb.toLowerCase()
          });
        else
          this.finalData = result.data;
      }
    }, error => {
      this.spinnerloader = false;
    })
  }

}
