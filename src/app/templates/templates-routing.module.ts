import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {
    path: 'details',
    component: ProductDetailsComponent
  },
  {
    path: '',
    redirectTo: "details",
    pathMatch: 'full'
  },
  { path: 'success', component: SuccessComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
