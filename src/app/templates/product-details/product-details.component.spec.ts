import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ElementsModule } from 'src/app/elements/elements.module';
import { ProductApiService } from 'src/app/services/product-api.service';
import { TemplatesRoutingModule } from '../templates-routing.module';

import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
      imports: [
        CommonModule,
        TemplatesRoutingModule,
        ElementsModule,
        HttpClientModule,
        SweetAlert2Module

      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ProductApiService', () => {
    const _productService = TestBed.inject(ProductApiService);
    spyOn(_productService, 'getProducts');
    component.getData();
    expect(_productService.getProducts).toHaveBeenCalled();
  });
});
