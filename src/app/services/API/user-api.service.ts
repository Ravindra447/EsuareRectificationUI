import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiUrlService } from '../config/api-url.service';
@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  constructor(private httpClient: HttpClient, private api: ApiUrlService) { }
  cities: any = [
    {
      district: 'Chittoor',
      city: 'Tirupati'
    },
    {
      district: 'Chittoor',
      city: 'Chittoor'
    },
    {
      district: 'Chittoor',
      city: 'Srikalahasti'
    },
    {
      district: 'Kadapa',
      city: 'Rajampet'
    },
    {
      district: 'Kadapa',
      city: 'Rayachoty'
    },
    {
      district: 'East Godavari',
      city: 'Kakinada'
    },
    {
      district: 'East Godavari',
      city: 'Rajamahedravaram'
    },
    // {
    //   district: 'Krishna',
    //   city: 'Vijayawada'
    // },
    // {
    //   district: 'Guntur',
    //   city: 'Guntur'
    // },
    // {
    //   district: 'Guntur',
    //   city: 'Narasaraopet'
    // },
    // {
    //   district: 'Guntur',
    //   city: 'Chilakaluripeta'
    // },
    // {
    //   district: 'Guntur',
    //   city: 'Sattenapalli'
    // }
  ];
  createUser(userData) {
    return this.httpClient.post(this.api.url + '/create-user', userData);
  }
  fetchAllusers() {
    return this.httpClient.get(this.api.url + '/fetch-all-users');
  }
  deleteUserById(id) {
    return this.httpClient.delete(this.api.url + '/delete-userById/' + id);
  }
  updateUser(userData) {
    return this.httpClient.put(this.api.url + '/update-user', userData);
  }
  //login
  loginAuth(userData) {
    return this.httpClient.post(this.api.url + '/userAuth', userData);
  }
  //change Password
  changePassword(userData) {
    return this.httpClient.post(this.api.url + '/change-password', userData);
  }
  //forgot Password
  forgotPassword(userData) {
    return this.httpClient.post(this.api.url + '/forgot-password', userData);
  }
  fetchCities(){
    return this.cities;
  }
  
  logout(){
    localStorage.clear();
  }
}
