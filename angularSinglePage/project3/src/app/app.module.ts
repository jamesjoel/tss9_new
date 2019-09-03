import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { MyProductService } from './services/my-product.service';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { DewaliBonusPipe } from './pipes/dewali-bonus.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    AddProductComponent,
    EmployeeComponent,
    DewaliBonusPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
       MyProductService,
       EmployeeService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
