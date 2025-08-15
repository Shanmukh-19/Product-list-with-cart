import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from '../product-list/product-list';
import { Cart } from '../cart/cart';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList, Cart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('product-list-with-cart');
}
