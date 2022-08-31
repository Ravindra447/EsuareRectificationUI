import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RectificationRoutingModule } from './rectification-routing.module';
import { UploadRectificationDataComponent } from './rectification-components/upload-rectification-data/upload-rectification-data.component';
import { ViewRectificationComponent } from './rectification-components/view-rectification/view-rectification.component';

import { UpdateRectificationComponent } from './rectification-components/update-rectification/update-rectification.component';
//shared module
import { SharedModule } from '../../../shared/shared.module';
@NgModule({
  declarations: [UploadRectificationDataComponent, ViewRectificationComponent,UpdateRectificationComponent],
  imports: [
    CommonModule,
    RectificationRoutingModule,
    SharedModule
  ]
})
export class RectificationModule { }
