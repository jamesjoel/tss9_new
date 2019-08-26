import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getUser(){

    return this.http.get<any>("http://localhost:3000/api/user");
  }
  saveUser(obj:any){
    return this.http.post<any>("http://localhost:3000/api/user", obj);
  }
}
