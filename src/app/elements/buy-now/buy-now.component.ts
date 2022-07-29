import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.scss']
})
export class BuyNowComponent implements OnInit {

  stripePromise = loadStripe(environment.stripe);


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  async pay(): Promise<void> {
    // here we create a payment object
    const payment = {
      name: 'Iphone',
      currency: 'usd',
      successUrl: 'http://localhost:4200/success',
      cancelUrl: 'http://localhost:4200/cancel',
      amount: 99900,
      quantity: 1,
    };

    const stripe = await this.stripePromise;

    this.http
      .post("http://localhost:9091/api/v1/products/payments", payment)
      .subscribe((data: any) => {
        stripe.redirectToCheckout({
          sessionId: data.id,
        });
      });

    // this.http.post("http://localhost:9091/api/v1/products/payments", payment).subscribe((data: any) => {
    //   console.log(data);
    // })
  }

}
