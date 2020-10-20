import { HttpClient } from '@angular/common/http';
import { JsonPipePipe } from './json-pipe.pipe';

describe('JsonPipePipe', () => {
  let http: HttpClient;
  it('create an instance', () => {
    const pipe = new JsonPipePipe(http);
    expect(pipe).toBeTruthy();
  });
});
