import { Component, OnInit } from '@angular/core';
import { UserService  } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  arr=[];
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

}
