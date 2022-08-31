import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
declare interface RouteInfo {
  nav_path: string;
  nav_title: string;
  nav_icon: string;
  nav_id: number;
  nav_isAccess: any;
}
export const ROUTES: RouteInfo[] = [
  { nav_id: 1, nav_path: 'home', nav_title: 'Home', nav_icon: 'dashboard', nav_isAccess: true },
  { nav_id: 2, nav_path: 'rectification', nav_title: 'Rectifications', nav_icon: 'category', nav_isAccess: true },
  { nav_id: 3, nav_path: 'users', nav_title: 'Manage Users', nav_icon: 'manage_accounts', nav_isAccess: true },
];

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  constructor(private httpClient: HttpClient) { }

  getSideNavbarItems() {
    return ROUTES;
  }
}
