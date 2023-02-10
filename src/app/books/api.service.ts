import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  searchKey = new BehaviorSubject('')


  constructor(private http: HttpClient) { }

  //getallbooks
  getallbooks() {
    return this.http.get('http://localhost:3000/all-books')
  }


  //addtowishlist
  addtowishlist(book: any) {
    const body = {
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      description: book.description,
      image: book.image,
    }
    return this.http.post('http://localhost:3000/add-to-wishlist', body)
  }

  //getwishlist
  getwishlist() {
    return this.http.get('http://localhost:3000/get-wishlist')
  }


  //deletefrom wishlist
  deletefromwishlist(id: any) {
    return this.http.delete('http://localhost:3000/delete-item-wishlist/' + id)
  }
}
