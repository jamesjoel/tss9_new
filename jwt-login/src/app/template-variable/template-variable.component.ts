import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.sass']
})
export class TemplateVariableComponent implements OnInit {
  
  // @ViewChild('demo') myRef : ElementRef;
  constructor() { }

  ngOnInit() {
  }
  show(x,y){
    console.log(y.innerHTML);
  }
  show1(x){
    console.log(x.value);
  }
  register(form:NgForm){
    // console.log(form.value);
    // console.log(form.touched);
    // console.log(form.submitted);   
    console.log(form.controls['email'].value);

  }
}
