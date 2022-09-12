import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent  {
  isSignedUp=false;
  constructor(private fb:FormBuilder,private router:Router) { }

  signupform=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,25}$/)]],
    confirmPassword:['',Validators.required]
  })
  signup(){
    this.isSignedUp=true;
    setTimeout(() => {
      this.isSignedUp=false
      this.router.navigate(['/login'])
    }, 2000);
  }
  }

