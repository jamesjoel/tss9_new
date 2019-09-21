import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
 
interface user{
  email : string;
  password : string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  errorMsg:string="";
  user:user={
    email : "",
    password : ""
  }

  constructor(
      private _authService : AuthService,
      private _router : Router
      ) { }

  ngOnInit() {
  }
  doLogin(){
   // console.log(this.user);
    this._authService.login(this.user).subscribe(
      res=>{
        //console.log(res);
        localStorage.setItem("token", res.token);
        this._router.navigate(["/user"]);
      },
      err=>{
        if(err.error==1){
          this.errorMsg="user and password incorrect";
        }
        if(err.error==2){
          this.errorMsg="password incorrect";

        }

    }
    )
  }

}
