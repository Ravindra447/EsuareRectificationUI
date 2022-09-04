import { Component, OnInit } from '@angular/core';
import { TitlesService } from '../../../../services/Titles-Icons-Manage/titles.service';
import { IconsService } from '../../../../services/Titles-Icons-Manage/icons.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-settings',
  templateUrl: './view-settings.component.html',
  styleUrls: ['./view-settings.component.scss']
})
export class ViewSettingsComponent implements OnInit {
  spinnerloader:boolean=false;
  selectedIndex: number;
  constructor(public titleService:TitlesService,
    private toastr: ToastrService,
    public iconService:IconsService) { }

  ngOnInit(): void {
  }
  tabChanged(event) {
    // console.log(event.index);
  }

}
