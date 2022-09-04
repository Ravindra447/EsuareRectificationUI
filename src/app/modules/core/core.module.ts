import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
//shared module
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './core-components/login/login.component';
import { ChangePasswordComponent } from './core-components/change-password/change-password.component';
import { ForgotPasswordComponent } from './core-components/forgot-password/forgot-password.component';
@NgModule({
  declarations: [LoginComponent, ChangePasswordComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule { }
