import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {

  constructor() { }
  url = location.origin == 'http://localhost:4200' || location.origin == 'http://localhost:8100' ? 'http://localhost:9003/apis' : 'https://esquare-rectification.herokuapp.com/apis';

}
