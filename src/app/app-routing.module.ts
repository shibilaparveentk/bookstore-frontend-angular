import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksRoutingModule } from './books/books-routing.module';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //login
  {
    path:'',component:LoginComponent
  },
  { path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) },
  //PageNotFoundComponent
  { path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BooksRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
