import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ElementsModule } from '../elements/elements.module';
import { HttpClientModule } from '@angular/common/http';
import { SuccessComponent } from './success/success.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    ElementsModule,
    HttpClientModule,
    SweetAlert2Module

  ]
})
export class TemplatesModule { }
