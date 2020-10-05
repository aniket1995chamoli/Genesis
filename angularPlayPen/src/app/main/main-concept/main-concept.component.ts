import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-concept',
  templateUrl: './main-concept.component.html',
  styleUrls: ['./main-concept.component.css']
})
export class MainConceptComponent implements OnInit {
  urlMapping = [
    {url: 'component', name: 'Component'},
    {url: 'templates', name: 'Templates'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
