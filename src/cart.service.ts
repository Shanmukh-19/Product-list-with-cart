import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];

  getCartItems() {
    return this.items;
  }

  addToCart(product: any) {
    const existing = this.items.find(item => item.name === product.name);
    if (existing) {
      existing.quantity = product.quantity;
      if (existing.quantity <= 0) {
        this.items = this.items.filter(i => i.name !== product.name);
      }
    } else {
      this.items.push({ ...product });
    }
  }
  clearCart() {
    this.items = [];
  }
}
