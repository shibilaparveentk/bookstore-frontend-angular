import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //error message
  errMsg=""

  //login form
  loginForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    //psswd: ['', [Validators.required, Validators.pattern('[a-zA-z0-9]*')]]
  })

  constructor(private fb: FormBuilder,private api: ApiService,private router :Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      let uname = this.loginForm.value.uname
      //let psswd = this.loginForm.value.psswd
      //asynchronous
      this.api.login(uname)
      .subscribe(
        //response 200
        (result:any)=>{
        console.log(result);
        alert(result.message)
        this.router.navigateByUrl('books')
      },
      //response 4xx
      (result:any)=>{
        this.errMsg=result.error.message
        //alert(result.error.message)
      }
      )
    }
    else{
      alert(' Invalid Form')
    }
  }
}
