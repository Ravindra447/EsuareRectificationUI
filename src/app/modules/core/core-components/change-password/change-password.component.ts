import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TitlesService } from '../../../../Services/Titles-Icons-Manage/titles.service';
import { IconsService } from '../../../../Services/Titles-Icons-Manage/icons.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserApiService } from '../../../../Services/API/user-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  errorMsg: String;
  changePasswordFormGroup: FormGroup;
  spinnerloader: Boolean = false;

  constructor(public dialogRef: MatDialogRef<ChangePasswordComponent>,
    public titleService: TitlesService,
    private _formBuilder: FormBuilder,
    private userApiService: UserApiService,
    public iconService: IconsService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.changePasswordFormGroup = this._formBuilder.group({
      old_password: ['', [Validators.required]],
      user_password: ['', [Validators.required]],
      user_email:[JSON.parse(localStorage.getItem('userDetails')).user_email]
    });
  }
  onNoClick() {
    this.dialogRef.close();
  }
  changePassFun() {
    console.log(this.changePasswordFormGroup.value);
    this.spinnerloader = true;
    this.userApiService.changePassword(this.changePasswordFormGroup.value).subscribe((result: any) => {
      if (result.success) {
        this.spinnerloader = false;
        this.toastr.success(result.msg);
        this.changePasswordFormGroup.markAsPristine();
        this.changePasswordFormGroup.markAsUntouched();
        this.changePasswordFormGroup.reset();
        // localStorage.setItem('userDetails',JSON.stringify(result.data));
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
