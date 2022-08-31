import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'esquare',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren:()=>import ('./modules/core/core.module').then(core=>core.CoreModule)
  },
  {
    path: 'esquare',
    loadChildren:()=>import ('./modules/admin/admin.module').then(admin=>admin.AdminModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
