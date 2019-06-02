import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { Router } from '@angular/router';
import { LoginService } from "../services/login.service";
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent implements OnInit {
 
  constructor(private _Router : Router,private _loginService : LoginService,private _authService : AuthenticationService) { }
  studentAccount : string;
  password : string;
  obj : User;
  response : Object;

  ngOnInit() {
  }

  studentLogin(){
    this.obj = new User();
    this.obj.userCode = this.studentAccount;
    this.obj.userPassword = this.password;
    console.warn(this.obj)
    this._loginService.doLogin(this.obj).subscribe(data => {
      
      if(data.status !='404'){
        this.obj = data.responseInfo;
        this._authService.authenticate(this.obj.userCode);  
        this._Router.navigate(['home'])
      } else {
        alert("User code or password not match");
      }
    }); 
  }

}
