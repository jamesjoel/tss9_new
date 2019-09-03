import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [
  {
         path:'product',
         component:ProductComponent
  },
  {
        path:'product/productList',
        component:ProductListComponent
  },
  {
    path:'employee',
    component:EmployeeComponent
}
 
        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
