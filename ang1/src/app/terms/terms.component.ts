import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  constructor(private mytitle : Title, private messageService: MessageService) { 
    this.mytitle.setTitle("Terms");
  }

  ngOnInit() {
  }
  sendMessage(){
    // send message to subscribers via observable subject
    this.messageService.sendMsg('Message from TERMS to App Component!');
}
clearMessages(){
  // clear messages
  this.messageService.clearMsg();
}

}
