import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSettingsComponent } from './settings-compoents/view-settings/view-settings.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'main-view',
    pathMatch:'full'
  },
  {
    path:'main-view',
    component:ViewSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
