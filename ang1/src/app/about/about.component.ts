import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


import { MyboxComponent } from '../mybox/mybox.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  name = "rohit";
  arr = [
    {
      name : "rohit",
      age : 25,
      city : "indore"
    },
    {
      name : "jaya",
      age : 22,
      city : "ujjain"
    },
    {
      name : "gaurav",
      age : 27,
      city : "indore"
    }
  ];
  newname : string;


  constructor(private demo:Title) {
    this.demo.setTitle("About Page");
   }

  ngOnInit() {
  }
  change(){
    this.newname=this.name;
  }

}
