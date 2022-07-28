import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BuyNowComponent } from './buy-now/buy-now.component';



@NgModule({
  declarations: [
    NavbarComponent,
    BuyNowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    BuyNowComponent
  ]
})
export class ElementsModule { }
