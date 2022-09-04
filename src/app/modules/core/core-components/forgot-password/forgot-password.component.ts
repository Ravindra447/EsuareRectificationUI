import { Component, OnInit } from '@angular/core';
import { TitlesService } from '../../../../Services/Titles-Icons-Manage/titles.service';
import { IconsService } from '../../../../Services/Titles-Icons-Manage/icons.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserApiService } from '../../../../Services/API/user-api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  hide = true;
  errorMsg: String;
  forgotPasswordFormGroup: FormGroup;
  spinnerloader: Boolean = false;

  constructor(
    public titleService: TitlesService,
    private _formBuilder: FormBuilder,
    private userApiService: UserApiService,
    public iconService: IconsService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.forgotPasswordFormGroup = this._formBuilder.group({
      user_email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      user_password: ['', [Validators.required]],
    });
  }
  onNoClick() {
    this.router.navigateByUrl('login');
  }
  forgotPassFun() {
    console.log(this.forgotPasswordFormGroup.value);
    this.spinnerloader = true;
    this.userApiService.forgotPassword(this.forgotPasswordFormGroup.value).subscribe((result: any) => {
      if (result.success) {
        this.spinnerloader = false;
        this.toastr.success(result.msg);
        this.forgotPasswordFormGroup.markAsPristine();
        this.forgotPasswordFormGroup.markAsUntouched();
        this.forgotPasswordFormGroup.reset();
        this.onNoClick();
      }else{
        this.spinnerloader = false;
        this.toastr.error(result.msg);
        this.errorMsg=result.msg;
        setInterval(()=>{
          this.errorMsg='';
        },5000)
      }
    }, error => {
      this.spinnerloader = false;
      this.toastr.error('Internal server error.');
    })
  }

}
