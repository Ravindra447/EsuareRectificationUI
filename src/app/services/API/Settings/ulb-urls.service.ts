import { Injectable } from '@angular/core';
import { ApiUrlService } from '../../config/api-url.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UlbUrlsService {

  constructor(private httpClient: HttpClient, private api: ApiUrlService) { }
  createUlbURLs(ulbData) {
    return this.httpClient.post(this.api.url + '/create-ulbURLs', ulbData);
  }
  fetchAllUlbURLs() {
    return this.httpClient.get(this.api.url + '/fetch-all-ulbURLss');
  }
  deleteUlbURLById(id) {
    return this.httpClient.delete(this.api.url + '/delete-ulbURLsById/' + id);
  }
  updateUlbURL(UlbURLData) {
    return this.httpClient.put(this.api.url + '/update-ulbURLs', UlbURLData);
  }
}
