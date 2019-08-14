import { Component  } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template : <h1>this is template</h1>',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'ang1';
  name = "rohit verma";


  demo(){
    console.log(this.title);
    
  }
  
}




