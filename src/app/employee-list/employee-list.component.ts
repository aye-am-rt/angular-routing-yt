import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <p>
      employee-list works!
    </p>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {
  public employees=[];

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this.employees=this._employeeService.getEmployees();
  }

}
