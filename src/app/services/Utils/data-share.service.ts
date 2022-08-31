import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  private profileSource = new BehaviorSubject('no data');
  currentData = this.profileSource.asObservable();

  //exp data
  private expSource = new BehaviorSubject('no data');
  currentExpData = this.expSource.asObservable();

  //sub Item data
  private subItemSource = new BehaviorSubject('no data');
  currentSubItemData = this.subItemSource.asObservable();
  constructor() { }

  changeData(data: any) {
    this.profileSource.next(data);
  };
  //exp change 
  changeExpData(data: any) {
    this.expSource.next(data);
  }
  //sub Item change fun
  changeSubItemData(data: any) {
    this.subItemSource.next(data);
  }
}
