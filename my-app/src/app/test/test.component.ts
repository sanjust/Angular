import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  public name = 'sanjiv';
  public myId = 'testId';
  public myname = 'sanjiv';
  public greet = '';
  public countryName = '';
  public hasError = true;
  public siteUrl = window.location.href;
  ngOnInit() {
  }

  greetUser() {
    return 'Hello ' + this.name;
  }

  public changeName() {
    this.myname = 'rajiv' ;
    return 'Hello ' + this.myname;
  }

  onClick(event) {
    if (this.greet === '') {
      this.greet = 'welcome to angular world';
    } else {
      this.greet = '';
    }
    console.log(event);
  }

  logMessage(value) {
    this.countryName = value;
    console.log(value);
  }
}
