import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.css']
})
export class HeaderAppComponent implements OnInit {

  constructor(private _authService : AuthenticationService) { }

  ngOnInit() {
  }

}
