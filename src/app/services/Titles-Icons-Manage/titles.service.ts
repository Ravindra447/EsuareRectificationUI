import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitlesService {

  public titles = {
    admin_upload_rectification: "Upload Rectification File",
    view_rectification: "View Rectification"
  }
  public tooltip = {
    mat_add_rectification: "Add Rectification",
  }
  public btn = {
    submit: "Submit",
    cancel: "Cancel",
    update: "Update",
    addMore: "Add more",
    next: "Next",
    back: "Back",
    remove: "Remove",
    read_more: "Detail View",
    login: "Login",
    delete_image: "Delete Image",
    update_image: "Update Image"

  }
  isLoggedIn() {
    let user = JSON.parse(localStorage.getItem('userDetails'));
    if (user != null) {
      return true;
    }
    else {
      return false;
    }
  }

  constructor() { }
}
