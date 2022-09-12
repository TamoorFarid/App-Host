import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  islogin=false
  constructor(private fb:FormBuilder,private authSer:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })
  login(){
    this.authSer.isLoggedIn=true;
    this.islogin=true;
    setTimeout(() => {
      this.islogin=false;
      this.router.navigate(['/home'])
    }, 2000);
  }
}
