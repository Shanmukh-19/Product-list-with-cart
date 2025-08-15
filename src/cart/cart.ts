import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { Order } from '../order/order';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart {
  constructor(private cartService: CartService, private dialog: MatDialog) {
  }
  get cartItems() {
    return this.cartService.getCartItems();
  }
  removeFromCart(product: any) {
    this.cartService.addToCart({ ...product, quantity: 0 });
  }
  get total(): number {
    return this.cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0);
  }
  get totalItems(): number {
    return this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }
  confirmOrder(){
    var matDialogConfig = new MatDialogConfig();
    matDialogConfig = {
      width: '60vw',
      height: '85vh',
      data: {
        total: this.total,
        items: this.cartItems
      }
    }
    const dialogRef = this.dialog.open(Order, matDialogConfig);
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe(result => {
    if (result === 'success') {
      this.cartService.clearCart();
    }
  });
  }
}
