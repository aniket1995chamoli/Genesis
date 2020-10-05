import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Pipe({
  name: 'jsonPipe'
})
export class JsonPipePipe implements PipeTransform {

   constructor(private http: HttpClient) {

   }

  transform(url: string): any {
    this.http.get(url).subscribe((response:any) => { 
      let data: any = [];
      for(let i:any = 0; i < response.length; i++) {
        data.push(response[i].login);
      }
      console.log('data from pipe:' + data);
      return data;
    });
  }

}
