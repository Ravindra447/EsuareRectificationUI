import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './admin-components/main/main.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(home => home.HomeModule)
      },
      {
        path:'rectification',
        loadChildren: () => import('../admin/admin-modules/rectification/rectification.module').then(recti => recti.RectificationModule)
      },
      {
        path: 'users',
        loadChildren: () => import('../admin/admin-modules/manage-users/manage-users.module').then(user => user.ManageUsersModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(settings => settings.SettingsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
