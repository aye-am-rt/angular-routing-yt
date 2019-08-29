import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
    <p>
      employee-detail works!
    </p>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {
  public employees=[];

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this.employees=this._employeeService.getEmployees();
  }

}
