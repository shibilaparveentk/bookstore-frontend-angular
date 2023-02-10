import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {

  allBooks: any = []
  searchTerm: string = ''
  cartItemscount: number = 0

  constructor(private api: ApiService, private cart: CartService) { }

  ngOnInit(): void {
    this.api.getallbooks().subscribe(
      (data: any) => {
        // if (data) {
        //   this.cartItemscount = data.length
        // }
        this.allBooks = data.result
      }
    )

    this.api.searchKey.subscribe(
      (data: any) => {
        this.searchTerm = data
      }
    )

    this.cart.cartItems.subscribe(
      (data:any)=>{
        if(data){
          this.cartItemscount= data.length
        }
      }
    )
    
  }

  search(event: any) {
    let searchKey = event.target.value
    this.api.searchKey.next(searchKey)
  }



  //addtowishlist
  addtowishlist(book: any) {
    this.api.addtowishlist(book)
      .subscribe(
        (result: any) => {
          alert(result.message)
        },
        (result: any) => {
          alert(result.error.message)
        }
      )
  }

  //addtocart
  addtocart(book: any) {
    this.cart.addtocart(book)

  }
}


