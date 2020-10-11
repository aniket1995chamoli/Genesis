import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pit',
  templateUrl: './pit.component.html',
  styleUrls: ['./pit.component.css']
})
export class PitComponent implements OnInit {
  messages = [
    {m: 'First Projected Content', id: 1},
    {m: 'Second Projected Content', id: 2},
    {m: 'Third Projected Content', id: 3}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
