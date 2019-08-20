import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    MyboxComponent,
    TermsComponent,
    StudentComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
