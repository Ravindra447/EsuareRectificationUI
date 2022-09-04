import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  studentCount: number = 0;
  projectCount: number = 0;
  researchCount: number = 0;
  socialProfileList: any = [];
  currentYear = (new Date()).getFullYear();
  constructor() { }

  ngOnInit(): void {
  }
  OpenWebSite(link) {
    window.open(link, "_blank");
  }
}
