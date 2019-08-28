import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface studentData{
  _id ?: string;
  name : string;
  age : number;
  fee : number;
}
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }
 
  getStudent(id:string=""){
    console.log('*******', id);
    if(id){
      var url = `http://localhost:3000/api/user?id=${id}`;
    }
    else{
      
      var url = `http://localhost:3000/api/user`;
    }
    return this.http.get<studentData>(url);
  }
  editStudent(obj:studentData){

    return this.http.put<studentData>(`http://localhost:3000/api/user?id=${obj._id}`, obj);
  }
  deleteStudent(id:string){
    return this.http.delete(`http://localhost:3000/api/user?id=${id}`);
  }
  addStudent(obj:studentData){
    console.log("calling");
    return this.http.post<studentData>("http://localhost:3000/api/user", obj);
  }
}
