import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}
  items = this.cartService.items;
  count = 0
  getCount() {
    if(this.count == this.items.length)
      this.count = 0
    return ++this.count
  }
  ngOnInit(): void {}
}
