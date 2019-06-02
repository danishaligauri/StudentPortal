import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { Student } from '../classes/student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  getAllStudent(): Observable<any> {
    return this.http.get(environment.baseUrl+environment.getAll);
  }
  removeStudent(id : number): Observable<any> {
    return this.http.get(environment.baseUrl+environment.delete+id);
  }

  saveStudent(obj : Student): Observable<any> {
    return this.http.post(environment.baseUrl+environment.save,obj);
  }
}
