import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    BooksComponent,
    AllBooksComponent,
    WishlistComponent,
    CartComponent,
    FilterPipe,
    AboutComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule
  ]
})
export class BooksModule { }
