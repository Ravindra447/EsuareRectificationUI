import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TitlesService } from '../../../../../../Services/Titles-Icons-Manage/titles.service';
import { IconsService } from '../../../../../../Services/Titles-Icons-Manage/icons.service';
import { ToastrService } from 'ngx-toastr';
import { RectificationService } from '../../../../../../services/API/rectification.service';
//datashare service
import { DataShareService } from '../../../../../../services/Utils/data-share.service';
import * as _moment from 'moment';
const moment = _moment;
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-update-rectification',
  templateUrl: './update-rectification.component.html',
  styleUrls: ['./update-rectification.component.scss']
})
export class UpdateRectificationComponent implements OnInit {
  rectificationFormGroup: FormGroup;
  rectificationStatus = ['Pending', 'Rectified'];
  maxDate: Date = new Date();
  spinnerloader: Boolean = false;

  constructor(public titleService: TitlesService,
    public iconService: IconsService,
    private apiService: RectificationService,
    private _formBuilder: FormBuilder,
    private dataShareService: DataShareService,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<UpdateRectificationComponent>
  ) { }

  ngOnInit(): void {
    this.rectificationFormGroup = this._formBuilder.group({
      NameOfULB: ['', [Validators.required]],
      WardNo: ['', [Validators.required]],
      Location: ['', [Validators.required]],
      PoleNumber: ['', [Validators.required]],
      CauseOfComplaint: ['', [Validators.required]],
      Status: ['', [Validators.required]],
      DateOfComplaint: ['', [Validators.required]],
      DateOfRectification: [''],
      _id: []
    });
    this.rectificationData();
  }
  onNoClick() {
    this.dialogRef.close();
  }
  rectificationData() {
    this.dataShareService.currentData.subscribe((data: any) => {
      if (data === 'no data') {
        this.dialogRef.close();
      } else {
        console.log(data);
        this.rectificationFormGroup.setValue({
          NameOfULB: data.NameOfULB,
          WardNo: data.WardNo,
          Location: data.Location,
          PoleNumber: data.PoleNumber,
          CauseOfComplaint: data.CauseOfComplaint,
          Status: data.Status,
          DateOfComplaint: new Date(data.DateOfComplaint),
          DateOfRectification: new Date(data.DateOfRectification),
          _id: data._id
        });
        this.onStatusChange({ value: data.Status });
      }
    })
  }
  onStatusChange(event) {
    console.log(event.value);

    this.rectificationFormGroup.get('DateOfRectification').clearValidators();
    if (event.value == "Rectified") {
      this.rectificationFormGroup.get('DateOfRectification').enable();
      this.rectificationFormGroup.get('DateOfRectification').setValidators([Validators.required])
    } else {
      this.rectificationFormGroup.get('DateOfRectification').setValue('');
      this.rectificationFormGroup.get('DateOfRectification').disable();
    }
    this.rectificationFormGroup.get('DateOfRectification').updateValueAndValidity();
  }
  updateFun() {
    this.rectificationFormGroup.get('DateOfComplaint').setValue(moment(this.rectificationFormGroup.get('DateOfComplaint').value).format('MM/DD/YYYY'));
    this.rectificationFormGroup.get('DateOfRectification').setValue(moment(this.rectificationFormGroup.get('DateOfRectification').value).format('MM/DD/YYYY'));

    console.log(this.rectificationFormGroup.value);
    this.spinnerloader = true;
    this.apiService.updateRectification(this.rectificationFormGroup.value).subscribe((result: any) => {
      if (result.success) {
        this.spinnerloader = false;
        this.toastr.info(result.msg);
      }
    }, error => {
      this.spinnerloader = false;
      this.toastr.error('Internal server error.');
    })
  }

}
