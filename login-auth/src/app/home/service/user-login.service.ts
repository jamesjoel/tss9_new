import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface user {
  name?: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http : HttpClient) { }

  checkEmail(user:user){
    return this.http.post<any>("http://localhost:3000/api/user/login", user, {
      withCredentials: true  // <=========== important!
    });
  }
  backdoor():any{
    return this.http.get<any>("http://localhost:3000/api/user/backdoor", {
      withCredentials: true  // <=========== important!
    });
  }
  check(){
    return this.http.get<any>("http://localhost:3000/api/user/backdoor", {
      withCredentials: true  // <=========== important!
    });

  }
}
