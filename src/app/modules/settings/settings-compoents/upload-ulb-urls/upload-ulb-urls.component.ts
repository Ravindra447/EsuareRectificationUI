import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TitlesService } from '../../../../services/Titles-Icons-Manage/titles.service';
import { IconsService } from '../../../../services/Titles-Icons-Manage/icons.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { UlbUrlsService } from '../../../../services/API/Settings/ulb-urls.service';
import { UserApiService } from '../../../../Services/API/user-api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-ulb-urls',
  templateUrl: './upload-ulb-urls.component.html',
  styleUrls: ['./upload-ulb-urls.component.scss'],
})
export class UploadULBURLSComponent implements OnInit {
  ulbURLSFormGroup: FormGroup;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  spinnerloader: boolean = false;
  cities: any = [];

  constructor(public titleService: TitlesService,
    private toastr: ToastrService,
    public iconService: IconsService,
    private _formBuilder: FormBuilder,
    private apiService: UlbUrlsService,
    private userApiService: UserApiService,
    public dialogRef: MatDialogRef<UploadULBURLSComponent>,
    private router: Router) { }
  ngOnInit(): void {
    this.cities = this.userApiService.cities;
    this.ulbURLSFormGroup = this._formBuilder.group({
      ulb_name: ['', [Validators.required]],
      ulb_url: ['', [Validators.required]],
      total_led_lamps: [null, [Validators.required]],
      installed_ccms: ['', [Validators.required]],
      load: ['', [Validators.required]],
      light_defective: [0, [Validators.required]],
      ulb_url_satus: [true]
    });
  }
  ULBSubmitFun() {
    console.log(this.ulbURLSFormGroup.value);
    this.spinnerloader = true;
    this.apiService.createUlbURLs(this.ulbURLSFormGroup.value).subscribe((result: any) => {
      if (result.success) {
        this.spinnerloader = false;
        this.toastr.success(result.msg);
        this.onNoClick();
      }
    }, error => {
      this.spinnerloader = false;
      this.toastr.error('Internal server error.');
    })
  }
  onNoClick() {
    this.dialogRef.close();
  }
}