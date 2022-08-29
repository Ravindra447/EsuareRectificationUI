import { Component, OnInit } from '@angular/core';
import { TitlesService } from '../../../../../../Services/Titles-Icons-Manage/titles.service';
import { IconsService } from '../../../../../../Services/Titles-Icons-Manage/icons.service';

@Component({
  selector: 'app-view-rectification',
  templateUrl: './view-rectification.component.html',
  styleUrls: ['./view-rectification.component.scss'],
})
export class ViewRectificationComponent implements OnInit {

  constructor(public titleService: TitlesService,
    public iconService: IconsService) { }

  ngOnInit() {}

}
