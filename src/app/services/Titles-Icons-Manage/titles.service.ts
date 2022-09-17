import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitlesService {

  public titles = {
    admin_upload_rectification: "Upload Rectification File",
    view_rectification: "View Rectification",
    update_rectification: "update Rectification",
    admin_add_user:"Add User",
    admin_manage_user:"Users",
    admin_update_user:"Update User",
    admin_setting:"Settings",
    admin_add_ULB_Urls:"Add ULB URLS",
    admin_update_ULB_Urls:"Update ULB URLS",

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
    update_image: "Update Image",
    add_ulb_url:"ADD"
  }
  public tooltip={
    mat_add_rectification: "Add Rectification",
    mat_view:"View/Edit",
    mat_delete:"Delete",
    mat_close:"Close",
    mat_add_publication:"Add/update",
    mat_add_user:"Create User",
    mat_add_ulb_url:"Add ULB Urls",
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
