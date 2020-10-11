import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pit-child',
  templateUrl: './pit-child.component.html',
  styleUrls: ['./pit-child.component.css']
})
export class PitChildComponent implements OnInit {
  @Input() message:any;

  constructor() { }

  ngOnInit(): void {
  }

}
