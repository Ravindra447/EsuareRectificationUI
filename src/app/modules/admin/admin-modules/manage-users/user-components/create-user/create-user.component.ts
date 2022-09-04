import { Component, OnInit } from '@angular/core';
import { TitlesService } from '../../../../../../services/Titles-Icons-Manage/titles.service';
import { IconsService } from '../../../../../../services/Titles-Icons-Manage/icons.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

import { UserApiService } from '../../../../../../services/API/user-api.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  hide = true;
  userFormGroup: FormGroup;
  spinnerloader: Boolean = false;

  userRoles = ['admin', 'user'];
  cities: any = [];
  constructor(public titleService: TitlesService,
    public iconService: IconsService,
    private _formBuilder: FormBuilder,
    private userApiService: UserApiService,
    private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cities = this.userApiService.cities;
    this.userFormGroup = this._formBuilder.group({
      user_name: ['', [Validators.required]],
      user_email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      user_mobile: [''],
      user_active_status: [true],
      user_password: ['', [Validators.required]],
      user_role: ['', [Validators.required]],
      user_ulb: ['', [Validators.required]]
    });
  }
  goBack() {
    window.history.back();
  }
  userOnboardFun() {
    this.spinnerloader = true;
    this.userApiService.createUser(this.userFormGroup.value).subscribe((result: any) => {
      if (result.success) {
        this.spinnerloader = false;
        this.toastr.success(result.msg);
        this.goBack();
      }
    }, error => {
      this.spinnerloader = false;
      this.toastr.error('Internal server error.');
    })
  }
}
