import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
interface user {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http : HttpClient, private _router : Router) { }

  login(user:user){
    return this._http.post<any>("http://localhost:3000/api/login", user);
  }
  isLoggedIn(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
  getToken(){
    return localStorage.getItem("token");
  }
  logout(){
    localStorage.removeItem("token");
    this._router.navigate(["/"]);
  }
}
