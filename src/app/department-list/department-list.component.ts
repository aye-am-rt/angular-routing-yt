import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <ul class="items">
    <li (click)="onSelect(department)" *ngFor="let department of departments">
    <span class="badge">{{department.id}}</span>{{department.name}}
    </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  departments=[
    {"id":1,"name":"angular"},
    {"id":2,"name":"node"},
    {"id":3,"name":"mongoDB"},
    {"id":4,"name":"ruby"},
    {"id":5,"name":"Bootstrap"}
]

  constructor( private router: Router) { }
  
  onSelect(department){
  this.router.navigate(['/departments',department.id]);
  }
  ngOnInit() {
  }

}
