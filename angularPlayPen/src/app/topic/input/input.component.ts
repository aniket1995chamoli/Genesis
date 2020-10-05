import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  input_ngmodel:string;
  input_inputBinding:string;
  input_keyupBinding:string;
  input_enterkeyBinding:string;

  type:string;

  constructor() { 

  }

  ngOnInit(): void {
  }

  getFromValueBinding(event) {
    this.input_inputBinding = event.target.value;
  }

  getFromKeyupBinding(event) {
    this.input_keyupBinding = event.target.value;
  }

  getFromEnterKeyBinding(value) {
    this.input_enterkeyBinding = value;
  }

}
