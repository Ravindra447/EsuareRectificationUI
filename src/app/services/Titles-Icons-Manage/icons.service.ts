import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  constructor() { }
  public fa_icons={
    plus:"fa fa-plus",
    back:"fa fa-arrow-left",
    delete:"fa fa-trash-o",
    edit:"fa fa-edit",
    remove:"fa fa-times"
  }
  public material_icons={
    
  }

}
