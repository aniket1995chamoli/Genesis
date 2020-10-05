import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'add',
  pure: false
})
export class AddPipe implements PipeTransform {

  transform(value: number[]): number {
    let sum:number = 0;
    for(let i:number = 0; i < value.length; i++) {
      sum = sum + value[i];
    }
    return sum;
  }

}
