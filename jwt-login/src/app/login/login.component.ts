import { Component, OnInit } from '@angular/core';

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

  user:user={
    email : "",
    password : ""
  }

  constructor() { }

  ngOnInit() {
  }
  doLogin(){
    console.log(this.user);
  }

}
