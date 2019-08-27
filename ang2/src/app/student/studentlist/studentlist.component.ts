import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
interface studentData{
  name : string;
  age : number;
  fee : number;
}
@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentlistComponent implements OnInit {
  alldata:studentData;

  constructor(private student : StudentService) { }

  ngOnInit() {
    this.student.getStudent().subscribe(data=>{
      console.log(data);
      this.alldata=data;
      // this.alldata.push(data);
    });
  }

}
