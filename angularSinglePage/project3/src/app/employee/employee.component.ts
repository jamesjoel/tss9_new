import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { empStore } from 'src/interface/emp';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
   emplsitStore:empStore[]=[];
  constructor(private empList:EmployeeService) { 
        }
    
                       
  ngOnInit() {
    this.emplsitStore=this.empList.getEmployee()
  }

}
