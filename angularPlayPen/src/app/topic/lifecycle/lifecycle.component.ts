import { ThrowStmt } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnDestroy {
  heroName:string;
  heros:string[];

  constructor() {
    console.log('Parent constructor called');
    this.heroName = "Superman";
    this.heros = [];
   }

  ngOnInit(): void {
    console.log('Parent onInit called');
  }

  changeheroName(value: string): void {
    this.heroName = value;
    this.heros.push(value);
  }

  ngOnDestroy() {
    console.log('Parent Destroyed');
  }

  deleteHero() {
    this.heros.pop();
    console.log('heros: ' + this.heros);
  }

}
