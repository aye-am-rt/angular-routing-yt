import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return[
      {"id":1,"name":"angular"},
      {"id":2,"name":"node"},
      {"id":3,"name":"mongoDB"},
      {"id":4,"name":"ruby"},
      {"id":5,"name":"Bootstrap"}
  ];

  }
}
