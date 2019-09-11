import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../service/user-login.service';
import { Router } from '@angular/router';


interface user{
  name?:string;
  email : string;
  password : string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  errorMsg="";
  user:user={
    email : "",
    password : ""
  }
  constructor(private userLogin : UserLoginService, private router : Router) { }

  ngOnInit() {
  }
  
  doLogin(){
    this.userLogin.checkEmail(this.user).subscribe(data=>{
      
      if(data.status==100){
        this.errorMsg="Email And Password Wrong";
      }
      if(data.status==300){
          this.errorMsg="Password Wrong";

      }
      if(data.status==200){
        
       this.router.navigate(['user']);
      }
      
    });
  }

}
