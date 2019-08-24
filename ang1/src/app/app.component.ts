import { Component  } from '@angular/core';
import { Subscription } from 'rxjs';
import { MsgserviceService } from './services/msgservice.service';
// import { MessageService } from './message.service';



// import { Subscription } from 'rxjs';
// import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template : <h1>this is template</h1>',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'ang1';
  name = "rohit verma";
  demo2 : string="TSS";
  msgArr:any[];
  // sub : Subscription;
  constructor(private a : MsgserviceService){
 this.a.getMsg().subscribe(data=>{
      // console.log(data);
      this.demo2=data;
     // this.msgArr.push(data);
    });
  }

  test(){
    
  }








  // constructor(private msgSer : MessageService){
  //   this.sub=this.msgSer.getMsg().subscribe(data=>{
  //     if (this.msgArr) {
  //       this.msgArr.push(data);
  //       console.log("****",this.msgArr);
  //     } else {
  //       // clear messages when empty message received
  //       this.msgArr = [];
  //       console.log("----",this.msgArr);
  //     }
  //   });

  // }
  demo(){
    console.log(this.title);
    
  }
  
}




