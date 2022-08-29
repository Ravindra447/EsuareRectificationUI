import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadRectificationDataComponent } from './rectification-components/upload-rectification-data/upload-rectification-data.component';
import { ViewRectificationComponent } from './rectification-components/view-rectification/view-rectification.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'view',
    pathMatch:'full'
  },
  {
    path:'view',
    component:ViewRectificationComponent
  },
  {
    path:'upload',
    component:UploadRectificationDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RectificationRoutingModule { }
