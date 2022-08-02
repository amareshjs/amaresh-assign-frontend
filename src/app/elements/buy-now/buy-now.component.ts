import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.scss']
})
export class BuyNowComponent implements OnInit {

  @Input() product: any;

  stripePromise = loadStripe(environment.stripe);


  constructor(private http: HttpClient,
  ) {

  }

  ngOnInit(): void {

    console.log(this.product)
  }




  async pay(selectedQuantity: any): Promise<void> {
    // here we create a payment object
    console.log(selectedQuantity);
    const payment = {
      name: this.product.name,
      productId: this.product.id,
      successUrl: 'http://localhost:4200/success',
      cancelUrl: 'http://localhost:4200',
      quantity: selectedQuantity,
    };

    const stripe = await this.stripePromise;

    this.http
      .post("http://localhost:9091/api/v1/checkout/payments", payment)
      .subscribe((data: any) => {
        stripe.redirectToCheckout({
          sessionId: data.id,
        });
      });

  }

}
