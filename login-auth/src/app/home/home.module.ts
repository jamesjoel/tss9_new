import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { SignupComponent } from './signup/signup.component';
// import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LoginComponent, LayoutComponent, SignupComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
    // HttpClientModule
  ]
  
})
export class HomeModule { }
