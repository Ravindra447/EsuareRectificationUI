import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core-components/login/login.component';
import { MainComponent } from '../admin/admin-components/main/main.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
