import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }
  sendMessage(){
    // send message to subscribers via observable subject
    this.messageService.sendMsg('Message from Home Component to App Component!');
}
clearMessages(){
  // clear messages
  this.messageService.clearMsg();
}

}
