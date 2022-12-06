import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {

  constructor() { }
  url = 'http://139.59.59.15:9003/apis'
  // url = location.origin == 'https://esquare-rectification.herokuapp.com' ? 'https://esquare-rectification.herokuapp.com/apis' : 'http://localhost:9003/apis';
}
