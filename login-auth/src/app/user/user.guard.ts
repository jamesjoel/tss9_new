import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoginService } from '../home/service/user-login.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor( private userLogin:UserLoginService, private router : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // this.userLogin.backdoor();
    // return true;
    //console.log(this.userLogin.backdoor());
    this.userLogin.backdoor().subscribe(data=>{
      console.log(data);
      if(data.status==200){
        return true;
      }
      else{
        return this.router.parseUrl("/");
      }
    });
    // var status = this.userLogin.backdoor();
    // if(status){
    //   return true;
    // }else{
    //   return this.router.parseUrl("/");
    // }
  }
  
}
