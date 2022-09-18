import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RectificationRoutingModule } from './rectification-routing.module';
import { UploadRectificationDataComponent } from './rectification-components/upload-rectification-data/upload-rectification-data.component';
import { ViewRectificationComponent } from './rectification-components/view-rectification/view-rectification.component';

import { UpdateRectificationComponent } from './rectification-components/update-rectification/update-rectification.component';
//shared module
import { SharedModule } from '../../../shared/shared.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [UploadRectificationDataComponent, ViewRectificationComponent,UpdateRectificationComponent],
  imports: [
    CommonModule,
    RectificationRoutingModule,
    SharedModule,
    NgCircleProgressModule.forRoot({
      backgroundColor: "green",
      backgroundPadding: 8,
      radius: 35,
      space: -15,
      maxPercent: 100,
      unitsColor: "#ffffff",
      outerStrokeWidth: 5,
      outerStrokeColor: "white",
      innerStrokeColor: "green",
      innerStrokeWidth: 2,
      titleColor: "#ffffff",
      subtitleColor: "#ffffff"
    })
  ]
})
export class RectificationModule { }
