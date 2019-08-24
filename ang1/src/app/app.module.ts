import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';


import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MyboxComponent } from './mybox/mybox.component';
import { TermsComponent } from './terms/terms.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { DemoComponent } from './demo/demo.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    MyboxComponent,
    TermsComponent,
    StudentComponent,
    StudentListComponent,
    DemoComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
