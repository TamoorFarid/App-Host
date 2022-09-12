import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActiveService implements CanActivate{

  constructor(private authSer:AuthService,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.authSer.isAuthenticated()){
      return true
    }
    else{
      this.router.navigate(['/login'])
      alert('login to your account to continue')
      return false;
    }
  }
}
