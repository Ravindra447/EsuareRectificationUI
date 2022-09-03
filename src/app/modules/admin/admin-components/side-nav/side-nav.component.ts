import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { Router } from "@angular/router";

//side nav service
import { SideNavService } from '../../../../services/nav-bar/side-nav.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  @ViewChild('drawer') drawer: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  menuItems: any = [];
  userDetails:any;
  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private router: Router,
    private navService: SideNavService) { }
  ngOnInit(): void {
    this.userDetails=JSON.parse(localStorage.getItem('userDetails'));
    this.fetchNav();
  }
  fetchNav() {
    if(this.userDetails)
      this.getSideNavbarItems();
    else
      this.router.navigateByUrl('login');
  }
  getSideNavbarItems() {
    this.menuItems = this.navService.getSideNavbarItems();
  }
  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }
  logoutFun(){
    this.router.navigateByUrl('login');
    localStorage.clear();
  }
  
}
