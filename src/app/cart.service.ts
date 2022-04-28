import { Injectable } from '@angular/core';
import { Product } from './products';

export interface Item {
  id: number;
  name: string;
  price: number;
  description: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Item[] = [];

  addToCart(product: Product) {
    const index = this.items.findIndex((item) => item.id == product.id);
    if (index >= 0) {
      ++this.items[index].quantity;
    } else {
      let item = {
        ...product,
        quantity: 1,
      };
      this.items.push(item);
    }
  }

  deleteItem(product: Item) {
    this.items.filter((item) => item.id !== product.id);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor() {}
}
