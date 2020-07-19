import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  
  public name = "dB";
  public message = "Welcome to DB";

  public person = {
    "firstName" : "Y",
    "lastName" : "P"
  }

  public date = new Date();

  @Input('parentData') public nameFromParent;
  @Output() public childEvent = new EventEmitter();

  fireEvent() {
    this.childEvent.emit("Hey EE");
  }

  constructor() { }

  ngOnInit() {
  }

}
