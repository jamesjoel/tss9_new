import { Component, OnInit } from '@angular/core';
import { UserService  } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  arr=[];
  path:string="";
  constructor(
    private _userService : UserService
  ) { }

  ngOnInit() {
    this._userService.getUserData().subscribe(
      res=>{
        console.log(res);
        this.arr=res;
      }
    )
  }
  doUpload(event){
    // console.log("------",event.target.files[0]);
    this._userService.fileUpload(event.target.files[0]).subscribe(
      res=>{
        console.log("-----",res);
        this.path = res.fileurl;
      },
      err=>{
        console.log(err);
      }
    )
  }

}
