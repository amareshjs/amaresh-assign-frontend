import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ElementsModule } from '../elements/elements.module';
import { CancelComponent } from './cancel/cancel.component';
import { HttpClientModule } from '@angular/common/http';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    CancelComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    ElementsModule,
    HttpClientModule
  ]
})
export class TemplatesModule { }
