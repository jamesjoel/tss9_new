import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
// import { StudentListComponent } from '../student-list/student-list.component';
import { newData } from '../models/student-interface';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  name = "TSS";
  new_a:string;

  newStu:newData; 
  addStu:newData;

  constructor(private title : Title) {
    this.title.setTitle("Student");
   }

  ngOnInit() {
  }
  add(){
    this.addStu = this.newStu;
    console.log(this.addStu);
    this.newStu={
      name : "",
      age : null
    };
  }

  receiveData(a:string)
  {
    console.log("-------",a);
    this.new_a=a;
  }

}
