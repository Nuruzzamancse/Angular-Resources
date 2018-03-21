import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = 'Nayon';
  public myId = 'testId';
  public successClass = 'text-success';
  public isError = true;
  public isSpecial = true;

  public displayName = false;

  public name2 = '';

  // Event Binding

  public greetings = '';

  public color = 'white';

  public names = ['Nabwab', 'Nayon', 'Sabrina', 'Shapla'];

  public highlightColor = 'yellow';

  public titleStyle = {
    color: 'blue',
    fontStyle : 'italic'
  }

  public person = {
    'firstname' : 'Nuruzzaman',
    'lastname' : 'Khan'
  }

  public message = {
    "text-success" : !this.isError,
    "text-danger" : this.isError,
    "text-special" : this.isSpecial
  }


  // sending to html as same name
  @Input() public parentData;

  // sending as another name

  @Input('parentData') public  pname ; // two way isn't working at the same time


  // sending to parent component

  @Output() public childEvent = new EventEmitter();

  public isDisabled = true;

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return 'Hello ' + this.name;
  }

  onClick(event) {

    this.greetings = event.type;

    console.log('Welcome to NKN\'S kingdom');

    console.log(event);

  }

  logfunction(myId) {
    console.log(myId.value);
    console.log(myId);
  }

  toggleDisplay() {
    this.displayName = !this.displayName;
  }

  fireEvent() {
    this.childEvent.emit('From child event');
  }

}
