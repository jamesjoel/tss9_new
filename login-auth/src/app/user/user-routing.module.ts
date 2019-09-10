import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  {
    path : "",
    component : LayoutComponent,
    children : [
      {
        path : "",
        component : DashboardComponent,
        canActivate : [UserGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
