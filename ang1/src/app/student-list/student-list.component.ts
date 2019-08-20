import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { newData } from '../models/student-interface';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  @Input() listName : string;
  @Input() listStu : newData;



   data = [{

     name : "rohit",
     age : 25
   },
   {
     name : "james",
     age : 26
   }
   ];



  constructor() { }

  ngOnInit() {
    

  }

}
