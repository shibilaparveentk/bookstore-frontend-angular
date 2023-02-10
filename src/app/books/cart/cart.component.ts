import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any = []
  totalamount: any = 0
  total = 0
  updatedtotal: any = 0

  constructor(private cart: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cart.cartItems.subscribe(
      (data) => {
        console.log(data);
        this.cartItems = data
      }
    )
    this.total = this.cart.getTotal()
    this.totalamount = this.total.toFixed(2)

  }

  //removeitem(book)
  removeItem(book: any) {
    this.cart.removeCartItem(book)
    this.total = this.cart.getTotal()
    this.totalamount = this.total.toFixed(2)

  }

  removeAllItems() {
    this.cart.removeAllItems()
  }




  //discount3per()
  discount3per(source: any) {
    // party.confetti(source);
    let discount = (this.totalamount * 3 / 100)
    let dis = this.total - discount
    this.updatedtotal = dis.toFixed(2)
    //this.updatedTotal= discountValue.toFixed(2)

  }


  //discount10per
  discount10per(source: any) {
    // party.confetti(source);
    let discount = (this.totalamount * 10 / 100)
    let dis = this.total - discount
    this.updatedtotal = dis.toFixed(2)

  }

  //discount50per
  discount50per(source: any) {
    // party.confetti(source);
    let discount = (this.totalamount * 50 / 100)
    let dis = this.total - discount
    this.updatedtotal = dis.toFixed(2)

  }
  //discount25per
  discount25per(source: any) {
    // party.confetti(source);
    let discount = (this.totalamount * 25 / 100)
    let dis = this.total - discount
    this.updatedtotal = dis.toFixed(2)

  }

  proceed() {
    alert('Your order placed successfully')
    this.removeAllItems()
    this.router.navigateByUrl('')
  }




}
