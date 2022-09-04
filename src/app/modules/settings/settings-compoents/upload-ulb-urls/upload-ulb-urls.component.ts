import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TitlesService } from '../../../../services/Titles-Icons-Manage/titles.service';
import { IconsService } from '../../../../services/Titles-Icons-Manage/icons.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { UlbUrlsService } from '../../../../services/API/Settings/ulb-urls.service';
import { UserApiService } from '../../../../Services/API/user-api.service';

@Component({
  selector: 'app-upload-ulb-urls',
  templateUrl: './upload-ulb-urls.component.html',
  styleUrls: ['./upload-ulb-urls.component.scss'],
})
export class UploadULBURLSComponent implements OnInit {
  ulbURLSData: any = [];
  ulbURLSFormGroup: FormGroup;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  p: number = 1;
  spinnerloader: boolean = false;
  cities: any=[];

  constructor(public titleService: TitlesService,
    private toastr: ToastrService,
    public iconService: IconsService,
    private _formBuilder: FormBuilder,
    private apiService:UlbUrlsService,
    private userApiService: UserApiService,
    private router: Router) { }
  ngOnInit(): void {
    this.cities = this.userApiService.cities;
    this.ulbURLSFormGroup = this._formBuilder.group({
      ulb_name: ['', [Validators.required]],
      ulb_url: ['', [Validators.required]],
      ulb_url_satus:[true]
    });
    this.getULBURLsFun();
  }
  ULBSubmitFun(){
    console.log(this.ulbURLSFormGroup.value);
    this.spinnerloader = true;
    this.apiService.createUlbURLs(this.ulbURLSFormGroup.value).subscribe((result: any) => {
      if (result.success) {
        this.spinnerloader = false;
        this.toastr.success(result.msg);
        this.getULBURLsFun();
      }
    }, error => {
      this.spinnerloader = false;
      this.toastr.error('Internal server error.');
    })
  }
  getULBURLsFun() {
    this.spinnerloader = true;
    this.apiService.fetchAllUlbURLs().subscribe((result: any) => {
      if (result.success) {
        this.spinnerloader = false;
        this.ulbURLSData = result.data;
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
}