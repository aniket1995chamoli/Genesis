import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  birthday = new Date(1995, 11, 29); // this date is 29/11/1995
  currency:string;
  slice:string = "shashank";
  toggle: boolean = false;
  exponent_val:number;
  exponent_exp:number = 1;
  array_one:number[] = [1,2,3];
  array_two:number[] = [1,2,3];
  followers: string[];

  constructor(private http: HttpClient) { 
    let obs = this.http.get('https://api.github.com/users/koushikkothagal/followers')
    obs.subscribe((response: any) => {
      let data: string[] = [];
      for(let i:any = 0; i < response.length; i++) {
        data.push(response[i].login);
      }   
      console.log('data from component : ' + data);
      this.followers = data;
    });
  }

  ngOnInit(): void {
    this.currency = "10.939234"
  }

  get customFormat() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  onToggle() {
    this.toggle = !this.toggle;
  }

  addToArray_one(value) {
    this.array_one.push(value);
  }

  addToArray_two(value: number) {
    let temp: number[] = [];
    for(let i:number = 0; i < this.array_two.length; i++) {
      temp.push(this.array_two[i]);
    }
    temp.push(value);
    this.array_two = temp;
  }



}
