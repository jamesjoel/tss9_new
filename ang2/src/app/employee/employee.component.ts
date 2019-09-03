import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


interface employee_data{
  name : string;
  age : number;
  salary : number;
  gender : string;
}
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  allData:employee_data[]=[];

  constructor(private emp : EmployeeService) { }

  ngOnInit() {
    this.allData=this.emp.getEmployee();
  }

}
