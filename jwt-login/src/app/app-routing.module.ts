import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth.guard';
import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { MyformComponent } from './myform/myform.component';

const routes: Routes = [
  {
    path : "",
    component : LoginComponent
  },
  {
    path : "myform",
    component: MyformComponent
  },
  {
    path : "temp",
    component : TemplateVariableComponent
  },
  {
    path : "user",
    canActivate : [AuthGuard],
    component : UserComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
