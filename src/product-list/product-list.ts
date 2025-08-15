import { Component, Output, EventEmitter } from '@angular/core';
import { data } from '../data';
import { CurrencyPipe, NgFor, NgIf} from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe, NgFor, NgIf],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  
  constructor(private cartService: CartService) {
    // Add quantity property to each product
    this.productList = data.map(product => ({
      ...product,
      quantity: 0
    }));
  }
  productList: any[] = [];

  addToCart(product: any) {
    product.quantity = 1;
    this.cartService.addToCart(product);
  }

  increment(product: any) {
    product.quantity++;
    this.cartService.addToCart(product);
  }

  decrement(product: any) {
    if (product.quantity > 0) {
      product.quantity--;
      this.cartService.addToCart(product);
    }
  }
}
