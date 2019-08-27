import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface studentData{
  name : string;
  age : number;
  fee : number;
}
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }
 
  getStudent(){
    return this.http.get<studentData>("http://localhost:3000/api/user");
  }
  editStudent(){

  }
  deleteStudent(){

  }
  addStudent(obj:studentData){
    console.log("------",obj);
    return this.http.post<studentData>("http://localhost:3000/api/user", obj);
  }
}
