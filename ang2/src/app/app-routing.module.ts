import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentlistComponent } from './student/studentlist/studentlist.component';
import { StudentaddComponent } from './student/studentadd/studentadd.component';
import { StudentdeleteComponent } from './student/studentdelete/studentdelete.component';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';



const routes: Routes = [
  {
    path : "admin",
    loadChildren : ()=> import('./admin/admin.module').then(m=>m.AdminModule)
                            /*  
                              children:function(){
                                import('').then(function(mode){
                                  return mode.Adminmodule;
                                })
                              }
                            */
  },
  {
    path : "teacher",
    component : TeacherComponent,
    children : [
      {
        path : "list",
        component : TeacherListComponent
      }
    ]
  },
  {
    path : "employee",
    component : EmployeeComponent
  },
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
