import { Directive, OnDestroy, OnInit } from '@angular/core';

let id: number = 1;

@Directive({
  selector: '[appLifecycle]'
})
export class LifecycleDirective implements OnInit, OnDestroy {

  constructor() { console.log('directive created'); }

  ngOnInit() {
    console.log('directive onInit. Hero number ' + id++);
  }
  
  ngOnDestroy() {
    console.log('directive is destroyed');
  }

}
