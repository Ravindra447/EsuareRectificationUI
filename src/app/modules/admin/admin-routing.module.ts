import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './admin-components/main/main.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'manage-user',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path:'rectification',
        loadChildren: () => import('../admin/admin-modules/rectification/rectification.module').then(recti => recti.RectificationModule)
      },
      {
        path: 'manage-user',
        loadChildren: () => import('../admin/admin-modules/manage-users/manage-users.module').then(user => user.ManageUsersModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(home => home.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
