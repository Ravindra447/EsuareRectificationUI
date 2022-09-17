import { Component, OnInit } from '@angular/core';
import { UlbUrlsService } from '../../../../services/API/Settings/ulb-urls.service';
import { ToastrService } from 'ngx-toastr';
import { TitlesService } from '../../../../services/Titles-Icons-Manage/titles.service';
import { IconsService } from '../../../../services/Titles-Icons-Manage/icons.service';
import { MatDialog } from '@angular/material/dialog';
import { UploadULBURLSComponent } from '../upload-ulb-urls/upload-ulb-urls.component';
import { DataShareService } from '../../../../services/Utils/data-share.service';
import { EditUlbUrlsComponent } from '../edit-ulb-urls/edit-ulb-urls.component';

@Component({
  selector: 'app-view-ulb-urls',
  templateUrl: './view-ulb-urls.component.html',
  styleUrls: ['./view-ulb-urls.component.scss'],
})
export class ViewUlbUrlsComponent implements OnInit {
  ulbURLSData: any = [];
  spinnerloader: boolean = false;
  p: number = 1;
  constructor(
    private apiService:UlbUrlsService,
    private toastr: ToastrService,
    public titleService: TitlesService,
    public iconService: IconsService,
    public dialog: MatDialog,
    private dataShareService: DataShareService,
  ) { }

  ngOnInit() {
    this.getULBURLsFun();
  }
  getULBURLsFun() {
    this.spinnerloader = true;
    this.apiService.fetchAllUlbURLs().subscribe((result: any) => {
      if (result.success) {
        this.spinnerloader = false;
        this.ulbURLSData = result.data;
        console.log(this.ulbURLSData);
      }
    }, error => {
      this.spinnerloader = false;
      this.toastr.error('Internal server error.');
    })
  }
  deleteULBURLsFun(item) {
    this.spinnerloader = true;
    this.apiService.deleteUlbURLById(item._id).subscribe((result: any) => {
      if (result.success) {
        this.ulbURLSData.splice(this.ulbURLSData.findIndex(obj => obj._id === item._id), 1);
        this.spinnerloader = false;
        this.toastr.warning(result.msg);
      }
    }, error => {
      this.spinnerloader = false;
      this.toastr.error('Internal server error.');
    })
  }
  pagination(event) {
    this.p = event;
  }
  addULBURLFun(){
    const dialogRef = this.dialog.open(UploadULBURLSComponent, {
      minWidth: '400px',
      maxWidth: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getULBURLsFun();
    });
  }
  editFun(item) {
    this.dataShareService.changeData(item);
    const dialogRef = this.dialog.open(EditUlbUrlsComponent, {
      minWidth: '400px',
      maxWidth: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getULBURLsFun();
    });
  }
}
