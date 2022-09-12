export class AuthService{
    isLoggedIn:Boolean=false;
  
    logIn(){
       this.isLoggedIn=true
    }
    logOut(){
       this.isLoggedIn=false
    }
    isAuthenticated(){
      return this.isLoggedIn
    }
  }
  