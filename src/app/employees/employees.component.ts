import { Employee } from './../models/Employee';
import { EmployeeService } from './../shared/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeeList: Employee[];
  constructor(private employeeService:EmployeeService ) { 
  }

  ngOnInit() {
    this.employeeList = this.employeeService.getEmployees();
  }
}
