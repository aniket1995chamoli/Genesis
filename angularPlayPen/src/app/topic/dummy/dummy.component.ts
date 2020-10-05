import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit, OnChanges, OnDestroy {
  @Input('hero') hero: string;

  constructor() { 
    console.log('Child constructor called');
  }

  ngOnInit(): void {
    console.log('Child onInit called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Child onChange called');
    for(const name in changes) {
      const v = changes[name];
      const prevValue = v.previousValue;
      const curValue = v.currentValue;
      console.log('the hero name changed from ' + prevValue + ' to ' + curValue);
    }
  }

  ngOnDestroy() {
    console.log('Child Destroyed');
  }



}
