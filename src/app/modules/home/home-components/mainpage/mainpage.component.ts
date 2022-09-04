import { Component, OnInit } from '@angular/core';
import { UlbUrlsService } from '../../../../services/API/Settings/ulb-urls.service';
import { ToastrService } from 'ngx-toastr';
import { SafePipe } from '../../../../services/pipes/safe.pipe';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
  providers: [SafePipe]
})
export class MainpageComponent implements OnInit {
  spinnerloader: boolean = false;
  ulbURLSData: any = [];
  userDetails: any;
  ulbUrl: any = '';
  constructor(
    private apiService: UlbUrlsService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    this.getULBURLsFun();
  }
  getULBURLsFun() {
    this.spinnerloader = true;
    this.apiService.fetchAllUlbURLs().subscribe((result: any) => {
      if (result.success) {
        if (this.userDetails.user_role === 'super_admin') {
          this.ulbURLSData = result.data;
          this.ulbUrl = this.ulbURLSData.length > 0 ? result.data[0].ulb_url:'';
        } else {
          this.ulbURLSData = result.data.filter((item) => {
            return item.ulb_name.toLowerCase() == this.userDetails.user_ulb.toLowerCase()
          });
          this.ulbUrl = this.ulbURLSData.length > 0 ? this.ulbURLSData[0].ulb_url : '';
        }
        this.spinnerloader = false;
      }
    }, error => {
      this.spinnerloader = false;
      this.toastr.error('Internal server error.');
    })
  }
  fetchURL() {

  }

}
