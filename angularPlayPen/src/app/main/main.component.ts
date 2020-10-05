import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  urlMapping = [
    {url: 'mainConcept', name: 'Main Concepts', id: 'mainConcept'},
    {url: 'about', name: 'About', id: 'about'}
    ]


  constructor() {
   }

  ngOnInit(): void {
  }

}
