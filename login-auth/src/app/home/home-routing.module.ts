import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path : "",
    component : LayoutComponent,
    children :[
      {
        path : "",
        component : LoginComponent
      },
      {
        path : "signup",
        component : SignupComponent

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
