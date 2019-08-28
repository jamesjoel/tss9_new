import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

interface studentData{
  _id ?: string;
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
    // _id : "",
    name : "",
    age : null,
    fee : null
  };

  constructor(private student : StudentService, private router: Router, private route : ActivatedRoute) 
  {
    this.route.params.subscribe(param=>{
      if(param.id){

        var id = param.id;
        student.getStudent(id).subscribe(data=>{
          console.log(data);
          this.newStudent=data[0];
        });
      }
    });
  }

  ngOnInit() {
  }
  save(){
    
   
      if(this.newStudent._id)
      {
        this.student.editStudent(this.newStudent).subscribe(data=>{
          this.router.navigate(['student']);
        });
      }
      else
      {

        this.student.addStudent(this.newStudent).subscribe(data=>{
          // if(data.status!=200)
          this.router.navigate(['student']);
        });
      }
   

  }

}
