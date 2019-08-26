import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  arr:any[]=[];
  name:string;

  constructor(private user : UserService) {
    
   }

   save(){
     this.user.saveUser({name:this.name}).subscribe(data=>{
      console.log(data);
     });
   }

  ngOnInit() {
    this.user.getUser().subscribe(data=>{
      console.log(data);
      this.arr=data;
    });
  }

}
