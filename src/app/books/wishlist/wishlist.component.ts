import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  searchTerm: string = ''
  wishlist: any
  emsg: string = ''

  constructor(private api: ApiService, private cart: CartService) { }

  ngOnInit(): void {
    this.api.searchKey.subscribe(
      (data: any) => {
        this.searchTerm = data
      }
    )


    //getwishlist
    this.api.getwishlist()
      .subscribe(
        //succes response
        (data: any) => {
          this.wishlist = data.result
          if (this.wishlist.length == 0) {
            this.emsg = 'empty wishlist'
          }
        },
        //client error
        (data: any) => {
          this.emsg = data.error.message
        }
      )

  }
  search(event: any) {
    let searchKey = event.target.value
    this.api.searchKey.next(searchKey)
  }

  //deletefromwishlist
  deletefromwishlist(book: any) {
    this.api.deletefromwishlist(book.id)
      .subscribe(
        (result: any) => {
          this.wishlist = result.wishlist
          if (this.wishlist.length == 0) {
            this.emsg = 'empty wishlist'
          }
        },
        (result: any) => {
          alert(result.error.message)
        }
      )
  }

  //addtocart
  addtocart(book: any) {
    this.cart.addtocart(book)
    this.deletefromwishlist(book)
  }
}
