import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //api call to login the form
  login(uname:any){
    const body = {
      uname
      //psswd
    }
    return this.http.post('http://localhost:3000/login',body)

  }
}
