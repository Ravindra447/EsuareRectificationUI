import { Component, OnInit } from '@angular/core';
import { TitlesService } from '../../../../../../Services/Titles-Icons-Manage/titles.service';
import { IconsService } from '../../../../../../Services/Titles-Icons-Manage/icons.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { UserApiService } from '../../../../../../services/API/user-api.service';
//datashare service
import { DataShareService } from '../../../../../../services/Utils/data-share.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userFormGroup: FormGroup;
  spinnerloader: Boolean = false;

  userRoles = ['admin', 'user'];

  cities: any = [
    {
      district: 'Chittoor',
      city: 'Tirupati'
    },
    {
      district: 'Chittoor',
      city: 'Chittoor'
    },
    {
      district: 'Chittoor',
      city: 'Srikalahasti'
    },
    {
      district: 'Kadapa',
      city: 'Rajampet'
    },
    {
      district: 'Kadapa',
      city: 'Rayachoty'
    },
    {
      district: 'East Godavari',
      city: 'Kakinada'
    },
    {
      district: 'East Godavari',
      city: 'Rajamahedravaram'
    }
  ];
  userDetails: any;
  constructor(public titleService: TitlesService,
    public iconService: IconsService,
    private _formBuilder: FormBuilder,
    private dataShareService: DataShareService,
    private userApiService: UserApiService,
    private router: Router, private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.userFormGroup = this._formBuilder.group({
      user_name: ['', [Validators.required]],
      user_email: ['', [Validators.required]],
      user_mobile: [''],
      user_role: ['', [Validators.required]],
      _id: ['', []],
      user_ulb: ['', [Validators.required]]
    });
    this.userData();
  }
  goBack() {
    window.history.back();
  }
  userUpdateFun() {
    console.log(this.userFormGroup.value);
    this.spinnerloader=true;
    this.userApiService.updateUser(this.userFormGroup.value).subscribe((result:any)=>{
      if(result.success){
        this.spinnerloader=false;
        this.toastr.info(result.msg);
      }
    }, error => {
        this.spinnerloader = false;
        this.toastr.error('Internal server error.');
      })
  }
  userData() {
    this.dataShareService.currentData.subscribe((data: any) => {
      if (data === 'no data') {
        this.router.navigate(['esquare/users/view-users']);
      } else {
        this.userDetails = data;
        this.userFormGroup.setValue({
          user_name: data.user_name,
          user_email: data.user_email,
          user_mobile: data.user_mobile,
          user_role: data.user_role,
          user_ulb:data.user_ulb,
          _id: data
        })
      }
    })
  }
}
