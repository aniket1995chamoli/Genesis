import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pit',
  templateUrl: './pit.component.html',
  styleUrls: ['./pit.component.css']
})
export class PitComponent implements OnInit {
  title = "lone wolf will be unaffected";
  messages:string[] = [
    "First Projected Content",
    "Second Projected Content"];

  constructor() { }

  ngOnInit(): void {
  }

}
