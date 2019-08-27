import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

interface studentData{
  name : string;
  age : number;
  fee : number;
}

@Component({
  selector: 'app-studentadd',
  templateUrl: './studentadd.component.html',
  styleUrls: ['./studentadd.component.scss']
})
export class StudentaddComponent implements OnInit {

  newStudent:studentData={
    name : "",
    age : null,
    fee : null
  };

  constructor(private student : StudentService) { }

  ngOnInit() {
  }
  save(){
    console.log(this.newStudent);
    this.student.addStudent(this.newStudent);
  }

}
