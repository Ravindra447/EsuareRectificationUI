import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewUserComponent } from './user-components/view-user/view-user.component';
import { CreateUserComponent } from './user-components/create-user/create-user.component';
import { EditUserComponent } from './user-components/edit-user/edit-user.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'view-users',
    pathMatch:'full'
  },
  {
    path:'view-users',
    component:ViewUserComponent
  },
  {
    path:'update-user',
    component:EditUserComponent
  },
  {
    path:'add-user',
    component:CreateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageUsersRoutingModule { }
