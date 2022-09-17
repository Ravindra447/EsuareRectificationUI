import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
//shared module
import { SharedModule } from '../shared/shared.module';
import { ViewSettingsComponent } from './settings-compoents/view-settings/view-settings.component';
import { UploadULBURLSComponent } from './settings-compoents/upload-ulb-urls/upload-ulb-urls.component';
import { ViewUlbUrlsComponent } from './settings-compoents/view-ulb-urls/view-ulb-urls.component';
import { EditUlbUrlsComponent } from './settings-compoents/edit-ulb-urls/edit-ulb-urls.component';


@NgModule({
  declarations: [ViewSettingsComponent, UploadULBURLSComponent,ViewUlbUrlsComponent,EditUlbUrlsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ],
  // exports:[SubItemsComponent]
})
export class SettingsModule { }
