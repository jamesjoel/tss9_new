import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  arr:any[]=[];

  constructor(private user : UserService) {
    
   }

  ngOnInit() {
    this.user.getUser().subscribe(data=>{
      console.log(data);
      this.arr=data;
    });
  }

}
