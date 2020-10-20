import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {
  slaves = ["Hawkeye","Hulk","Fury"];
  master = ["Loki"];
  values = ['Mysterio','Iron Man','Thor'];

  constructor() { }

  ngOnInit(): void {
  }

}
