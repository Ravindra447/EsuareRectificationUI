import { Injectable } from '@angular/core';
import { ApiUrlService } from '../config/api-url.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RectificationService {

  constructor(private httpClient: HttpClient, private api: ApiUrlService) { }
  createRectification(rectificationData) {
    return this.httpClient.post(this.api.url + '/create-rectification', rectificationData);
  }
  fetchAllRectifications() {
    return this.httpClient.get(this.api.url + '/fetch-all-rectifications');
  }
  deleteRectificationById(id) {
    return this.httpClient.delete(this.api.url + '/delete-rectificationById/' + id);
  }
  updateRectification(rectificationData) {
    return this.httpClient.put(this.api.url + '/update-rectification', rectificationData);
  }
}
