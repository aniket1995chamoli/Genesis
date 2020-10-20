import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  @Input('inputData') data_one;
  @Input('master') master;

  @Input()
  get value(): string {
    return this._value;
  }
  set value(value: string) {
    this._value = value + ' reporting for duty sire!';
  }
  private _value = '';

  constructor() { }

  ngOnInit(): void {
  }

}
