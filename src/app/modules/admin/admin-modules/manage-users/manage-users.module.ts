import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageUsersRoutingModule } from './manage-users-routing.module';
import { ViewUserComponent } from './user-components/view-user/view-user.component';
import { CreateUserComponent } from './user-components/create-user/create-user.component';
import { EditUserComponent } from './user-components/edit-user/edit-user.component';

//shared module
import { SharedModule } from '../../../shared/shared.module';
@NgModule({
  declarations: [ ViewUserComponent,
    CreateUserComponent,
    EditUserComponent],
  imports: [
    CommonModule,
    ManageUsersRoutingModule,
    SharedModule
  ]
})
export class ManageUsersModule { }
