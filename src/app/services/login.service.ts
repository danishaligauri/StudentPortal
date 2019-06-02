import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { User } from '../classes/user';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  
  doLogin(user : User): Observable<any> {
    
    return this.http.post(environment.baseUrl+environment.login,user);
  }
}
