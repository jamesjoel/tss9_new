import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentlistComponent } from './student/studentlist/studentlist.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './services/student.service';
import { StudentaddComponent } from './student/studentadd/studentadd.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    StudentaddComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
