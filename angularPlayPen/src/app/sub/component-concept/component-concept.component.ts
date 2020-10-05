import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-concept',
  templateUrl: './component-concept.component.html',
  styleUrls: ['./component-concept.component.css']
})
export class ComponentConceptComponent implements OnInit {

  urlMapping = [
    {url: 'input', name: 'User Input'},
    {url: 'pipes', name: 'Pipes'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
