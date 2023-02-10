import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemsArray: any = []
  cartItems = new BehaviorSubject([])

  constructor() { }

  //add to cart
  addtocart(book: any) {
    this.cartItemsArray.push(book)
    this.cartItems.next(this.cartItemsArray)
    console.log(this.cartItems);

  }

  //Total amount
  getTotal() {
    let totalsum = 0
    this.cartItemsArray.map((item: any) => {
      totalsum += item.price
    })
    return totalsum
  }

  //remove a single item
  removeCartItem(book: any) {
    this.cartItemsArray.map((item: any, index: any) => {
      if (book.id == item.id) {
        this.cartItemsArray.splice(index, 1)
      }
    })
    this.cartItems.next(this.cartItemsArray)
  }

  //remove all items
  removeAllItems() {
    this.cartItemsArray = []
    this.cartItems.next(this.cartItemsArray)
  }
}

