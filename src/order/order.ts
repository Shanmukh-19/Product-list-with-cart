import { CurrencyPipe, NgFor, } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { CartService } from '../cart.service'; 
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CurrencyPipe, NgFor],
  templateUrl: './order.html',
  styleUrl: './order.css'
})
export class Order {
  constructor(private cartService: CartService,
    public dialogRef: MatDialogRef<Order>,  // Inject dialog reference
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.cartItems = this.cartService.getCartItems();
  }
  cartItems: any[] = [];
  get total(): number {
    return this.cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0);
  }
  startNewOrder() {
    this.dialogRef.close('success');
  }
}
