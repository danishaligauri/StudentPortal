import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _Router : Router) { }
  authenticate(username) {
    localStorage.setItem('username', username)
  }

  isUserLoggedIn() { 
    let user = localStorage.getItem('username');
    return !(user === null)
    
  }

  logOut() {
    localStorage.removeItem('username');
    this._Router.navigate(['/'])
  }
}
 
