import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {

  constructor() { }
  url = location.origin == 'https://esquare-rectification.herokuapp.com' ? 'https://esquare-rectification.herokuapp.com/apis' : 'http://localhost:9003/apis';
}
