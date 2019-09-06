import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path : "",
    loadChildren : ()=> import("./home/home.module").then(mode=>mode.HomeModule)
  },
  {
    path : "user",
    loadChildren : ()=> import("./user/user.module").then(mode=>mode.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
