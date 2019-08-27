import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentlistComponent } from './student/studentlist/studentlist.component';
import { StudentaddComponent } from './student/studentadd/studentadd.component';


const routes: Routes = [
  {
    path : "student",
    component : StudentlistComponent
  },
  {
    path : "student/add",
    component : StudentaddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
