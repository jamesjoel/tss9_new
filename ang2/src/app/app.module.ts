import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule }  from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentlistComponent } from './student/studentlist/studentlist.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './services/student.service';
import { StudentaddComponent } from './student/studentadd/studentadd.component';
import { StudentdeleteComponent } from './student/studentdelete/studentdelete.component';
import { StudentupdateComponent } from './student/studentupdate/studentupdate.component';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';
import { BonusPipe } from './pipes/bonus.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    StudentaddComponent,
    StudentdeleteComponent,
    StudentupdateComponent,
    ProductComponent,
    EmployeeComponent,
    BonusPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
