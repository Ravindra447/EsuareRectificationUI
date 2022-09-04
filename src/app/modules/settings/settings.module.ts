import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
//shared module
import { SharedModule } from '../shared/shared.module';
import { ViewSettingsComponent } from './settings-compoents/view-settings/view-settings.component';
import { UploadULBURLSComponent } from './settings-compoents/upload-ulb-urls/upload-ulb-urls.component';

@NgModule({
  declarations: [ViewSettingsComponent, UploadULBURLSComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ],
  // exports:[SubItemsComponent]
})
export class SettingsModule { }
