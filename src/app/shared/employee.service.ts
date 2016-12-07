import { Employee } from './../models/Employee';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  arrayEmployee : Employee[] =[ new Employee(1),
                     new Employee(2),
                     new Employee(3), 
                     new Employee(4),
                     new Employee(5),
                     new Employee(6)];
  employee : Employee;
  
  constructor() { }

  getEmployees() : Employee[] {
    return this.arrayEmployee;
  }

  getEmployee(employeeId:number):Employee {
    return this.arrayEmployee.find((employee : Employee)=> employee.id===employeeId);
  }

}
