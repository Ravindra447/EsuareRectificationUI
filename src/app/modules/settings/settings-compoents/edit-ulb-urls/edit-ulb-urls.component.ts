import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TitlesService } from '../../../../services/Titles-Icons-Manage/titles.service';
import { IconsService } from '../../../../services/Titles-Icons-Manage/icons.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { UlbUrlsService } from '../../../../services/API/Settings/ulb-urls.service';
import { UserApiService } from '../../../../Services/API/user-api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataShareService } from '../../../../services/Utils/data-share.service';

@Component({
  selector: 'app-edit-ulb-urls',
  templateUrl: './edit-ulb-urls.component.html',
  styleUrls: ['./edit-ulb-urls.component.scss'],
})
export class EditUlbUrlsComponent implements OnInit {

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
    private dataShareService: DataShareService,
    public dialogRef: MatDialogRef<EditUlbUrlsComponent>,
    private router: Router) { }
  ngOnInit(): void {
    this.cities = this.userApiService.cities;
    this.ulbURLSFormGroup = this._formBuilder.group({
      ulb_name: ['', [Validators.required]],
      ulb_url: ['', [Validators.required]],
      total_led_lamps: [null, [Validators.required]],
      installed_ccms: ['', [Validators.required]],
      load: ['', [Validators.required]],
      ulb_url_satus: [true],
      light_defective: [0, [Validators.required]],
      _id: []
    });
    this.ULBURLSData();
  }
  ULBUpdatFun() {
    this.spinnerloader = true;
    this.apiService.updateUlbURL(this.ulbURLSFormGroup.value).subscribe((result: any) => {
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
  ULBURLSData() {
    this.dataShareService.currentData.subscribe((data: any) => {
      if (data === 'no data') {
        this.dialogRef.close();
      } else {
        this.ulbURLSFormGroup.setValue({
          ulb_name: data.ulb_name,
          ulb_url: data.ulb_url,
          total_led_lamps: data.total_led_lamps,
          installed_ccms: data.installed_ccms,
          load: data.load,
          ulb_url_satus: data.ulb_url_satus,
          light_defective:data.light_defective,
          _id: data._id
        });
      }
    })
  }
  onNoClick() {
    this.dialogRef.close();
  }
}