import { Employee } from './../models/Employee';
import { EmployeeService } from './../shared/employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeId;
  employee;

  constructor(private route: ActivatedRoute, 
              private employeeService:EmployeeService) { }

  ngOnInit() {
    //Get Url Param
    this.route.params.forEach((param:Params)=> 
        this.employeeId = param["id"]);

    //Get an employee
    this.employee = this.employeeService.getEmployee(parseInt(this.employeeId));
  }

  
}
