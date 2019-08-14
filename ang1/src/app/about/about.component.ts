import { Component, OnInit } from '@angular/core';


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



  constructor() { }

  ngOnInit() {
  }

}
