import { Component, OnInit } from '@angular/core';
import { Student } from '../classes/student';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  studentList : Array<Student>;
  show : boolean = false;
  data : Student;

  constructor(private _service : StudentService, private _router : Router) { }

  ngOnInit() {
    this.getAllStudent();
  }
  getAllStudent() {
    this._service.getAllStudent().subscribe(data => {
      this.studentList = data; 
    });

  }
  editStudent(obj : Student){
    console.warn(obj);
    this.show = true;
    this.data = new Student();
    this.data = obj;

  }
  removeStudent(id:number){
    this._service.removeStudent(id).subscribe(data => {
      this._router.navigate(['students']);
      this.getAllStudent();
      this.show = false;
    });
  }
  update(obj : Student){
    console.warn(obj);
    this._service.saveStudent(obj).subscribe(data =>{
      this._router.navigate(['students']);
      this.getAllStudent();
      this.show = false;

    });

  }
  addStudent() {
    this.show = true;
    this.data = new Student();
     }
}
