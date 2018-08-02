import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private _employeeService: EmployeeService ) { }

  public employees = [];

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data);
  }

}
