import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { UserApiService } from '../../../../Services/API/user-api.service';
import { ToastrService } from 'ngx-toastr';
import { TitlesService } from '../../../../services/Titles-Icons-Manage/titles.service';
import { IconsService } from '../../../../services/Titles-Icons-Manage/icons.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  loginFormGroup: FormGroup;
  errorMsg: any;
  showDownloadBtn: boolean = false;
  spinnerloader: Boolean = false;

  constructor(private _formBuilder: FormBuilder,
    private userApiService: UserApiService,
    public titleService: TitlesService,
    public iconService: IconsService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.loginFormGroup = this._formBuilder.group({
      user_email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      user_password: ['', [Validators.required]]
    });
  }
  loginFun() {
    this.spinnerloader = true;
    this.userApiService.loginAuth(this.loginFormGroup.value).subscribe((result: any) => {
      if (result.success) {
        this.spinnerloader = false;
        this.toastr.success(result.msg);
        let obj = {
          user_email: result.data.user_email,
          user_role: result.data.user_role,
          user_id: result.data.user_id,
          user_ulb: result.data.user_ulb
        }
        localStorage.setItem('userDetails', JSON.stringify(obj));
        this.router.navigateByUrl('esquare')
      } else {
        this.spinnerloader = false;
        this.toastr.error(result.msg);
        this.errorMsg = result.msg;
        setInterval(() => {
          this.errorMsg = '';
        }, 5000)
      }
    }, error => {
      this.spinnerloader = false;
      this.toastr.error('Internal server error.');
    })
  }
  forgotPassword() {

  }
}
