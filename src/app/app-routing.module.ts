import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxLoader } from 'ngx-http-loader';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./templates/templates.module').then(m => m.TemplatesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
