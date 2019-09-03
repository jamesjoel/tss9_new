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
        salary : 5000,
        gender : "male"
      },
      {
        name: "jaya",
        age: 22,
        salary: 57000,
        gender: "female"
      },
      {
        name: "james",
        age: 25,
        salary: 6500,
        gender: "male"
      },
      {
        name: "nidhi",
        age: 22,
        salary: 7500,
        gender: "female"
      },
      {
        name : "gaurav",
        age : 28,
        salary : 5000,
        gender : "male"
      }
    ];
    return obj;
  }
}
