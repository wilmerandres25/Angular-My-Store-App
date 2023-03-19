import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { Shipping } from '../shipping';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent {
  constructor(private cartService: CartService) {}

  shippingCosts!: Observable<Shipping[]>;

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
