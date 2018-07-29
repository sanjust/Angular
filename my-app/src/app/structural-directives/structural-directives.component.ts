import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  public displayName = true;
  public color  = 'red';
  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();
  constructor() { }
  public colors = ['red', 'blue', 'green', 'yellow'];
  ngOnInit() {
  }

  toggleName() {
    this.displayName = !this.displayName;
  }

  fireEvent() {
  this.childEvent.emit('Hey sanjiv from child...');
  }
}
