import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployee(){
    var obj = [
      {
        name : "rohit",
        age : 25,
        salary :100,
        gender : "male"
      },
      {
        name: "jaya",
        age: 22,
        salary: 200,
        gender: "female"
      },
      {
        name: "james",
        age: 25,
        salary: 300,
        gender: "male"
      },
      {
        name: "nidhi",
        age: 22,
        salary: 600,
        gender: "female"
      },
      {
        name : "gaurav",
        age : 28,
        salary : 700,
        gender : "male"
      }
    ];
    return obj;
  }
}
