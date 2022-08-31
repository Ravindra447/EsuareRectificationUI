import { Component, OnInit } from '@angular/core';
import { TitlesService } from '../../../../../../Services/Titles-Icons-Manage/titles.service';
import { IconsService } from '../../../../../../Services/Titles-Icons-Manage/icons.service';
import { RectificationService } from '../../../../../../services/API/rectification.service';
import { DataShareService } from '../../../../../../services/Utils/data-share.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateRectificationComponent } from '../update-rectification/update-rectification.component'
@Component({
  selector: 'app-view-rectification',
  templateUrl: './view-rectification.component.html',
  styleUrls: ['./view-rectification.component.scss'],
})
export class ViewRectificationComponent implements OnInit {
  spinnerloader: Boolean = false;

  finalData: any = [];
  constructor(public titleService: TitlesService,
    private dataShareService: DataShareService,
    private apiService: RectificationService,
    public dialog: MatDialog,
    public iconService: IconsService) { }

  ngOnInit() {
    this.fetchRectifications();
  }
  editFun(item) {
    console.log(item);
    this.dataShareService.changeData(item);
    const dialogRef = this.dialog.open(UpdateRectificationComponent, {
      minWidth: '400px',
      maxWidth: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  deleteFun(item) {

  }
  fetchRectifications() {
    this.spinnerloader = true;
    this.apiService.fetchAllRectifications().subscribe((result: any) => {
      if (result.success) {
        this.spinnerloader = false;
        this.finalData = result.data;
      }
    }, error => {
      this.spinnerloader = false;
    })
  }

}
