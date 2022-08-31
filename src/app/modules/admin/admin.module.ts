import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SideNavComponent } from './admin-components/side-nav/side-nav.component';
import { MainComponent } from './admin-components/main/main.component';
//shared module
import { SharedModule } from '../shared/shared.module';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [SideNavComponent,MainComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ToastrModule
  ]
})
export class AdminModule { }
