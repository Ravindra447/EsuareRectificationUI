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
@Component({
  selector: 'app-update-rectification',
  templateUrl: './update-rectification.component.html',
  styleUrls: ['./update-rectification.component.scss'],
})
export class UpdateRectificationComponent implements OnInit {

  constructor(public titleService: TitlesService,
    public iconService: IconsService,
    private apiService: RectificationService,
    private dataShareService:DataShareService,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<UpdateRectificationComponent>
    ) { }

    ngOnInit(): void {
      this.dataShareService.currentData.subscribe((data: any) => {
        if (data === 'no data') {
          this.dialogRef.close();
        } else {
          console.log(data);
        }
      })
    }
    onNoClick() {
      this.dialogRef.close();
    }

}
