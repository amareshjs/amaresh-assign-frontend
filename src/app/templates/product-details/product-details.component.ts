import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: any

  constructor(private _productApiService: ProductApiService) { }

  ngOnInit(): void {
    this._productApiService.getProducts().subscribe((res) => {
      this.product = res;

      console.log(this.product[0])
    })

  }

}
