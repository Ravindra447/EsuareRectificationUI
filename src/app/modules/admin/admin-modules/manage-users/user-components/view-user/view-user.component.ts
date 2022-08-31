import { Component, OnInit } from '@angular/core';
import { TitlesService } from '../../../../../../Services/Titles-Icons-Manage/titles.service';
import { IconsService } from '../../../../../../Services/Titles-Icons-Manage/icons.service';

import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { UserApiService } from '../../../../../../services/API/user-api.service';
//datashare service
import { DataShareService } from '../../../../../../services/Utils/data-share.service';
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  allUsers: any = [];
  spinnerloader: boolean = false;
  //ngx-pagination
  pageSizeOptions: number[] = [5, 10, 25, 100];
  p: number = 1;

  constructor(public titleService: TitlesService,
    public iconService: IconsService,
    private userApiService: UserApiService,
    private dataShareService:DataShareService,
    private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }
  pagination(event) {
    this.p = event;
  }
  editUserFun(item){
    this.dataShareService.changeData(item);
    this.router.navigate(['esquare/users/update-user']);
  }
  deleteUserFun(item){
    console.log(item);
    this.spinnerloader = true;
    this.userApiService.deleteUserById(item._id).subscribe((result:any)=>{
      if (result.success) {
        this.allUsers.splice(this.allUsers.findIndex(obj => obj._id === item._id), 1);
        this.spinnerloader = false;
        this.toastr.warning(result.msg);
      }
    }, error => {
      this.spinnerloader = false;
      this.toastr.error('Internal server error.');
    })
  }
  fetchUsers(){
    this.spinnerloader = true;
    this.userApiService.fetchAllusers().subscribe((result:any)=>{
      if (result.success) {
        this.spinnerloader = false;
        this.allUsers=result.data;
      }
    }, error => {
      this.spinnerloader = false;
      this.toastr.error('Internal server error.');
    })
  }
  updateUserStatus(event,item){
    console.log(event.checked,item);
    let obj=item;
    obj.user_active_status=event.checked,item
    this.spinnerloader=true;
    this.userApiService.updateUser(obj).subscribe((result:any)=>{
      if(result.success){
        this.spinnerloader=false;
        this.toastr.info(result.msg);
      }
    }, error => {
        this.spinnerloader = false;
        this.toastr.error('Internal server error.');
      })
  }
}
