import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentlistComponent } from './student/studentlist/studentlist.component';
import { StudentaddComponent } from './student/studentadd/studentadd.component';
import { StudentdeleteComponent } from './student/studentdelete/studentdelete.component';
import { ProductComponent } from './product/product.component';



const routes: Routes = [
  {
    path : "student",
    component : StudentlistComponent
  },
  {
    path: "student/edit/:id",
    component: StudentaddComponent
  },
  
  {
    path : "student/add",
    component : StudentaddComponent
  },
  {
    path : "student/delete/:id",
    component : StudentdeleteComponent
  },
  {
    path : "product",
    component : ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
