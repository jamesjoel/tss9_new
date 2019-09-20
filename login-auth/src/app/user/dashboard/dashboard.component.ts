import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../../home/service/user-login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor( private user : UserLoginService) { }

  ngOnInit() {
    this.user.getData().subscribe(data=>{
      console.log(data);
    })
  }

}
