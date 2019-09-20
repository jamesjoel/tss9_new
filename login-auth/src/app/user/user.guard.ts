import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


import { UserLoginService } from '../home/service/user-login.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor( private userLogin:UserLoginService, private router : Router){}
  canActivate():any{
    this.userLogin.backdoor().toPromise().then(data => {
      console.log("hello");
      if (!data.token) {
        this.router.navigate(["/"]);
      } else {
        return true;
      }
    });
  }
  
}
