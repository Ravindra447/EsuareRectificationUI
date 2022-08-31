import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainpageComponent } from './home-components/mainpage/mainpage.component';
//shared module
import { SharedModule } from '../shared/shared.module';

import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [MainpageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ToastrModule
  ]
})
export class HomeModule { }
