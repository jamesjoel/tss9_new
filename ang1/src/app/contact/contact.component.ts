import { Component, OnInit } from '@angular/core';
import { MyservService } from '../services/myserv.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private my : MyservService) {
    
   }

  ngOnInit() {
  }
  testing()
  {
    var x=this.my.demo(5);
    console.log(x);
  }

}
