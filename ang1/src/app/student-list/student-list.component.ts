import { Component, OnInit, OnChanges } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { newData } from '../models/student-interface';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit, OnChanges{

  @Input() listName : string;
  @Input() listStu : newData;
  @Output() demo = new EventEmitter();



   data:newData[]=[];



  constructor() { }

   sendDataToParent()
   {
     this.demo.emit("rohit verma");
     console.log("hello world");
   }


  ngOnInit() {
    

  }
  ngOnChanges(){
    if(this.listStu){

      this.data.push(this.listStu);
      console.log(this.data);
    }
  }
  

}
