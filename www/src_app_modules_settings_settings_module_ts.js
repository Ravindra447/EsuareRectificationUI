"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_settings_settings_module_ts"],{

/***/ 5982:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/settings/settings-compoents/edit-ulb-urls/edit-ulb-urls.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUlbUrlsComponent": () => (/* binding */ EditUlbUrlsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _edit_ulb_urls_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-ulb-urls.component.html?ngResource */ 3230);
/* harmony import */ var _edit_ulb_urls_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-ulb-urls.component.scss?ngResource */ 9629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_Titles_Icons_Manage_titles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/Titles-Icons-Manage/titles.service */ 5637);
/* harmony import */ var _services_Titles_Icons_Manage_icons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/Titles-Icons-Manage/icons.service */ 8824);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_API_Settings_ulb_urls_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/API/Settings/ulb-urls.service */ 7705);
/* harmony import */ var _Services_API_user_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Services/API/user-api.service */ 6467);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _services_Utils_data_share_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/Utils/data-share.service */ 1028);













let EditUlbUrlsComponent = class EditUlbUrlsComponent {
    constructor(titleService, toastr, iconService, _formBuilder, apiService, userApiService, dataShareService, dialogRef, router) {
        this.titleService = titleService;
        this.toastr = toastr;
        this.iconService = iconService;
        this._formBuilder = _formBuilder;
        this.apiService = apiService;
        this.userApiService = userApiService;
        this.dataShareService = dataShareService;
        this.dialogRef = dialogRef;
        this.router = router;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.spinnerloader = false;
        this.cities = [];
    }
    ngOnInit() {
        this.cities = this.userApiService.cities;
        this.ulbURLSFormGroup = this._formBuilder.group({
            ulb_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            ulb_url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            total_led_lamps: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            installed_ccms: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            load: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            ulb_url_satus: [true],
            light_defective: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            _id: []
        });
        this.ULBURLSData();
    }
    ULBUpdatFun() {
        this.spinnerloader = true;
        this.apiService.updateUlbURL(this.ulbURLSFormGroup.value).subscribe((result) => {
            if (result.success) {
                this.spinnerloader = false;
                this.toastr.success(result.msg);
                this.onNoClick();
            }
        }, error => {
            this.spinnerloader = false;
            this.toastr.error('Internal server error.');
        });
    }
    ULBURLSData() {
        this.dataShareService.currentData.subscribe((data) => {
            if (data === 'no data') {
                this.dialogRef.close();
            }
            else {
                this.ulbURLSFormGroup.setValue({
                    ulb_name: data.ulb_name,
                    ulb_url: data.ulb_url,
                    total_led_lamps: data.total_led_lamps,
                    installed_ccms: data.installed_ccms,
                    load: data.load,
                    ulb_url_satus: data.ulb_url_satus,
                    light_defective: data.light_defective,
                    _id: data._id
                });
            }
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
EditUlbUrlsComponent.ctorParameters = () => [
    { type: _services_Titles_Icons_Manage_titles_service__WEBPACK_IMPORTED_MODULE_2__.TitlesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService },
    { type: _services_Titles_Icons_Manage_icons_service__WEBPACK_IMPORTED_MODULE_3__.IconsService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _services_API_Settings_ulb_urls_service__WEBPACK_IMPORTED_MODULE_4__.UlbUrlsService },
    { type: _Services_API_user_api_service__WEBPACK_IMPORTED_MODULE_5__.UserApiService },
    { type: _services_Utils_data_share_service__WEBPACK_IMPORTED_MODULE_6__.DataShareService },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router }
];
EditUlbUrlsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-edit-ulb-urls',
        template: _edit_ulb_urls_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_ulb_urls_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditUlbUrlsComponent);



/***/ }),

/***/ 3366:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/settings/settings-compoents/upload-ulb-urls/upload-ulb-urls.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadULBURLSComponent": () => (/* binding */ UploadULBURLSComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _upload_ulb_urls_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-ulb-urls.component.html?ngResource */ 1237);
/* harmony import */ var _upload_ulb_urls_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-ulb-urls.component.scss?ngResource */ 6005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_Titles_Icons_Manage_titles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/Titles-Icons-Manage/titles.service */ 5637);
/* harmony import */ var _services_Titles_Icons_Manage_icons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/Titles-Icons-Manage/icons.service */ 8824);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_API_Settings_ulb_urls_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/API/Settings/ulb-urls.service */ 7705);
/* harmony import */ var _Services_API_user_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Services/API/user-api.service */ 6467);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 1484);












let UploadULBURLSComponent = class UploadULBURLSComponent {
    constructor(titleService, toastr, iconService, _formBuilder, apiService, userApiService, dialogRef, router) {
        this.titleService = titleService;
        this.toastr = toastr;
        this.iconService = iconService;
        this._formBuilder = _formBuilder;
        this.apiService = apiService;
        this.userApiService = userApiService;
        this.dialogRef = dialogRef;
        this.router = router;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.spinnerloader = false;
        this.cities = [];
    }
    ngOnInit() {
        this.cities = this.userApiService.cities;
        this.ulbURLSFormGroup = this._formBuilder.group({
            ulb_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            ulb_url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            total_led_lamps: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            installed_ccms: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            load: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            light_defective: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            ulb_url_satus: [true]
        });
    }
    ULBSubmitFun() {
        console.log(this.ulbURLSFormGroup.value);
        this.spinnerloader = true;
        this.apiService.createUlbURLs(this.ulbURLSFormGroup.value).subscribe((result) => {
            if (result.success) {
                this.spinnerloader = false;
                this.toastr.success(result.msg);
                this.onNoClick();
            }
        }, error => {
            this.spinnerloader = false;
            this.toastr.error('Internal server error.');
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
UploadULBURLSComponent.ctorParameters = () => [
    { type: _services_Titles_Icons_Manage_titles_service__WEBPACK_IMPORTED_MODULE_2__.TitlesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService },
    { type: _services_Titles_Icons_Manage_icons_service__WEBPACK_IMPORTED_MODULE_3__.IconsService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _services_API_Settings_ulb_urls_service__WEBPACK_IMPORTED_MODULE_4__.UlbUrlsService },
    { type: _Services_API_user_api_service__WEBPACK_IMPORTED_MODULE_5__.UserApiService },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router }
];
UploadULBURLSComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-upload-ulb-urls',
        template: _upload_ulb_urls_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_upload_ulb_urls_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UploadULBURLSComponent);



/***/ }),

/***/ 5681:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/settings/settings-compoents/view-settings/view-settings.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewSettingsComponent": () => (/* binding */ ViewSettingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _view_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-settings.component.html?ngResource */ 3324);
/* harmony import */ var _view_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-settings.component.scss?ngResource */ 9854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_Titles_Icons_Manage_titles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/Titles-Icons-Manage/titles.service */ 5637);
/* harmony import */ var _services_Titles_Icons_Manage_icons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/Titles-Icons-Manage/icons.service */ 8824);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4817);







let ViewSettingsComponent = class ViewSettingsComponent {
    constructor(titleService, toastr, iconService) {
        this.titleService = titleService;
        this.toastr = toastr;
        this.iconService = iconService;
        this.spinnerloader = false;
    }
    ngOnInit() {
    }
    tabChanged(event) {
        // console.log(event.index);
    }
};
ViewSettingsComponent.ctorParameters = () => [
    { type: _services_Titles_Icons_Manage_titles_service__WEBPACK_IMPORTED_MODULE_2__.TitlesService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService },
    { type: _services_Titles_Icons_Manage_icons_service__WEBPACK_IMPORTED_MODULE_3__.IconsService }
];
ViewSettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-view-settings',
        template: _view_settings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_settings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewSettingsComponent);



/***/ }),

/***/ 4335:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/settings/settings-compoents/view-ulb-urls/view-ulb-urls.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewUlbUrlsComponent": () => (/* binding */ ViewUlbUrlsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _view_ulb_urls_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-ulb-urls.component.html?ngResource */ 726);
/* harmony import */ var _view_ulb_urls_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-ulb-urls.component.scss?ngResource */ 2548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_API_Settings_ulb_urls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/API/Settings/ulb-urls.service */ 7705);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_Titles_Icons_Manage_titles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/Titles-Icons-Manage/titles.service */ 5637);
/* harmony import */ var _services_Titles_Icons_Manage_icons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/Titles-Icons-Manage/icons.service */ 8824);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _upload_ulb_urls_upload_ulb_urls_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../upload-ulb-urls/upload-ulb-urls.component */ 3366);
/* harmony import */ var _services_Utils_data_share_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/Utils/data-share.service */ 1028);
/* harmony import */ var _edit_ulb_urls_edit_ulb_urls_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../edit-ulb-urls/edit-ulb-urls.component */ 5982);












let ViewUlbUrlsComponent = class ViewUlbUrlsComponent {
    constructor(apiService, toastr, titleService, iconService, dialog, dataShareService) {
        this.apiService = apiService;
        this.toastr = toastr;
        this.titleService = titleService;
        this.iconService = iconService;
        this.dialog = dialog;
        this.dataShareService = dataShareService;
        this.ulbURLSData = [];
        this.spinnerloader = false;
        this.p = 1;
    }
    ngOnInit() {
        this.getULBURLsFun();
    }
    getULBURLsFun() {
        this.spinnerloader = true;
        this.apiService.fetchAllUlbURLs().subscribe((result) => {
            if (result.success) {
                this.spinnerloader = false;
                this.ulbURLSData = result.data;
                console.log(this.ulbURLSData);
            }
        }, error => {
            this.spinnerloader = false;
            this.toastr.error('Internal server error.');
        });
    }
    deleteULBURLsFun(item) {
        this.spinnerloader = true;
        this.apiService.deleteUlbURLById(item._id).subscribe((result) => {
            if (result.success) {
                this.ulbURLSData.splice(this.ulbURLSData.findIndex(obj => obj._id === item._id), 1);
                this.spinnerloader = false;
                this.toastr.warning(result.msg);
            }
        }, error => {
            this.spinnerloader = false;
            this.toastr.error('Internal server error.');
        });
    }
    pagination(event) {
        this.p = event;
    }
    addULBURLFun() {
        const dialogRef = this.dialog.open(_upload_ulb_urls_upload_ulb_urls_component__WEBPACK_IMPORTED_MODULE_5__.UploadULBURLSComponent, {
            minWidth: '400px',
            maxWidth: '600px'
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.getULBURLsFun();
        });
    }
    editFun(item) {
        this.dataShareService.changeData(item);
        const dialogRef = this.dialog.open(_edit_ulb_urls_edit_ulb_urls_component__WEBPACK_IMPORTED_MODULE_7__.EditUlbUrlsComponent, {
            minWidth: '400px',
            maxWidth: '600px'
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.getULBURLsFun();
        });
    }
};
ViewUlbUrlsComponent.ctorParameters = () => [
    { type: _services_API_Settings_ulb_urls_service__WEBPACK_IMPORTED_MODULE_2__.UlbUrlsService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService },
    { type: _services_Titles_Icons_Manage_titles_service__WEBPACK_IMPORTED_MODULE_3__.TitlesService },
    { type: _services_Titles_Icons_Manage_icons_service__WEBPACK_IMPORTED_MODULE_4__.IconsService },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog },
    { type: _services_Utils_data_share_service__WEBPACK_IMPORTED_MODULE_6__.DataShareService }
];
ViewUlbUrlsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-view-ulb-urls',
        template: _view_ulb_urls_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_ulb_urls_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewUlbUrlsComponent);



/***/ }),

/***/ 3590:
/*!*************************************************************!*\
  !*** ./src/app/modules/settings/settings-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsRoutingModule": () => (/* binding */ SettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _settings_compoents_view_settings_view_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-compoents/view-settings/view-settings.component */ 5681);




const routes = [
    {
        path: '',
        redirectTo: 'main-view',
        pathMatch: 'full'
    },
    {
        path: 'main-view',
        component: _settings_compoents_view_settings_view_settings_component__WEBPACK_IMPORTED_MODULE_0__.ViewSettingsComponent
    }
];
let SettingsRoutingModule = class SettingsRoutingModule {
};
SettingsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], SettingsRoutingModule);



/***/ }),

/***/ 3402:
/*!*****************************************************!*\
  !*** ./src/app/modules/settings/settings.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModule": () => (/* binding */ SettingsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 3590);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 2271);
/* harmony import */ var _settings_compoents_view_settings_view_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-compoents/view-settings/view-settings.component */ 5681);
/* harmony import */ var _settings_compoents_upload_ulb_urls_upload_ulb_urls_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-compoents/upload-ulb-urls/upload-ulb-urls.component */ 3366);
/* harmony import */ var _settings_compoents_view_ulb_urls_view_ulb_urls_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-compoents/view-ulb-urls/view-ulb-urls.component */ 4335);
/* harmony import */ var _settings_compoents_edit_ulb_urls_edit_ulb_urls_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-compoents/edit-ulb-urls/edit-ulb-urls.component */ 5982);




//shared module





let SettingsModule = class SettingsModule {
};
SettingsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_settings_compoents_view_settings_view_settings_component__WEBPACK_IMPORTED_MODULE_2__.ViewSettingsComponent, _settings_compoents_upload_ulb_urls_upload_ulb_urls_component__WEBPACK_IMPORTED_MODULE_3__.UploadULBURLSComponent, _settings_compoents_view_ulb_urls_view_ulb_urls_component__WEBPACK_IMPORTED_MODULE_4__.ViewUlbUrlsComponent, _settings_compoents_edit_ulb_urls_edit_ulb_urls_component__WEBPACK_IMPORTED_MODULE_5__.EditUlbUrlsComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule
        ],
        // exports:[SubItemsComponent]
    })
], SettingsModule);



/***/ }),

/***/ 9629:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/settings/settings-compoents/edit-ulb-urls/edit-ulb-urls.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXVsYi11cmxzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 6005:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/settings/settings-compoents/upload-ulb-urls/upload-ulb-urls.component.scss?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQtdWxiLXVybHMuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 9854:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/settings/settings-compoents/view-settings/view-settings.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 2548:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/settings/settings-compoents/view-ulb-urls/view-ulb-urls.component.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXVsYi11cmxzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 3230:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/settings/settings-compoents/edit-ulb-urls/edit-ulb-urls.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"main-container\">\n  <div class=\"card dialog\">\n      <div class=\"card-header card-header-primary\">\n          <h5 class=\"card-title\">{{titleService.titles.admin_update_ULB_Urls}}</h5>\n          <div class=\"icon add-icon\">\n              <i class=\"{{iconService.fa_icons.remove}}\" aria-hidden=\"true\"\n                  matTooltip=\"{{titleService.tooltip.mat_close}}\" (click)=\"onNoClick()\"></i>\n          </div>\n      </div>\n      <div class=\"card-body profile-header\">\n          <form [formGroup]=\"ulbURLSFormGroup\">\n              <div class=\"row\">\n                  <div class=\"col-md-6 col-12\">\n                      <mat-form-field class=\"example-full-width\">\n                          <mat-select placeholder=\"Select ULB\" type=\"text\" formControlName=\"ulb_name\" name=\"ulb_name\"\n                              required>\n                              <mat-option *ngFor=\"let option of cities\" [value]=\"option.city\">{{option.city}}\n                              </mat-option>\n                          </mat-select>\n                          <mat-error *ngIf=\"!ulbURLSFormGroup.get('ulb_name').valid\">Select valid ULB. </mat-error>\n                      </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6 col-12\">\n                      <mat-form-field class=\"example-full-width\">\n                          <input matInput placeholder=\"Enter URL\" type=\"text\" formControlName=\"ulb_url\" name=\"ulb_url\"\n                              required>\n                          <mat-error *ngIf=\"!ulbURLSFormGroup.get('ulb_url').valid\">Enter valid URL. </mat-error>\n                      </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6 col-12\">\n                      <mat-form-field class=\"example-full-width\">\n                          <input matInput placeholder=\"LED Lamps Installed\" type=\"number\"\n                              formControlName=\"total_led_lamps\" name=\"total_led_lamps\" required>\n                          <mat-error *ngIf=\"!ulbURLSFormGroup.get('total_led_lamps').valid\">Enter valid LED lamps.\n                          </mat-error>\n                      </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6 col-12\">\n                      <mat-form-field class=\"example-full-width\">\n                          <input matInput placeholder=\"Installed CCMS\" type=\"text\" formControlName=\"installed_ccms\"\n                              name=\"installed_ccms\" required>\n                          <mat-error *ngIf=\"!ulbURLSFormGroup.get('installed_ccms').valid\">Enter valid installed CCMS.\n                          </mat-error>\n                      </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6 col-12\">\n                      <mat-form-field class=\"example-full-width\">\n                          <input matInput placeholder=\"Load in KW\" type=\"text\" formControlName=\"load\" name=\"load\"\n                              required>\n                          <mat-error *ngIf=\"!ulbURLSFormGroup.get('load').valid\">Enter valid Load. </mat-error>\n                      </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6 col-12\">\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Defective Lights\" type=\"number\" formControlName=\"light_defective\" name=\"light_defective\"\n                            required>\n                        <mat-error *ngIf=\"!ulbURLSFormGroup.get('light_defective').valid\">Enter valid defective lights. </mat-error>\n                    </mat-form-field>\n                </div>\n                  <div class=\"col-md-12 col-12 stepper-btns\">\n                      <button class=\"btn btn-cancel\" (click)=\"onNoClick()\">Cancel</button>&nbsp;\n\n                      <button type=\"button\" (click)=\"ULBUpdatFun()\" [disabled]=\"ulbURLSFormGroup.invalid\"\n                          class=\"btn custom-button pull-right\">{{titleService.btn.update}}</button>\n                  </div>\n              </div>\n          </form>\n      </div>\n  </div>\n</div>";

/***/ }),

/***/ 1237:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/settings/settings-compoents/upload-ulb-urls/upload-ulb-urls.component.html?ngResource ***!
  \***************************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"main-container\">\n    <div class=\"card dialog\">\n        <div class=\"card-header card-header-primary\">\n            <h5 class=\"card-title\">{{titleService.titles.admin_add_ULB_Urls}}</h5>\n            <div class=\"icon add-icon\">\n                <i class=\"{{iconService.fa_icons.remove}}\" aria-hidden=\"true\"\n                    matTooltip=\"{{titleService.tooltip.mat_close}}\" (click)=\"onNoClick()\"></i>\n            </div>\n        </div>\n        <div class=\"card-body profile-header\">\n            <form [formGroup]=\"ulbURLSFormGroup\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 col-12\">\n                        <mat-form-field class=\"example-full-width\">\n                            <mat-select placeholder=\"Select ULB\" type=\"text\" formControlName=\"ulb_name\" name=\"ulb_name\"\n                                required>\n                                <mat-option *ngFor=\"let option of cities\" [value]=\"option.city\">{{option.city}}\n                                </mat-option>\n                            </mat-select>\n                            <mat-error *ngIf=\"!ulbURLSFormGroup.get('ulb_name').valid\">Select valid ULB. </mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-6 col-12\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Enter URL\" type=\"text\" formControlName=\"ulb_url\" name=\"ulb_url\"\n                                required>\n                            <mat-error *ngIf=\"!ulbURLSFormGroup.get('ulb_url').valid\">Enter valid URL. </mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-6 col-12\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"LED Lamps Installed\" type=\"number\"\n                                formControlName=\"total_led_lamps\" name=\"total_led_lamps\" required>\n                            <mat-error *ngIf=\"!ulbURLSFormGroup.get('total_led_lamps').valid\">Enter valid LED lamps.\n                            </mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-6 col-12\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Installed CCMS\" type=\"text\" formControlName=\"installed_ccms\"\n                                name=\"installed_ccms\" required>\n                            <mat-error *ngIf=\"!ulbURLSFormGroup.get('installed_ccms').valid\">Enter valid installed CCMS.\n                            </mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-6 col-12\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Load in KW\" type=\"text\" formControlName=\"load\" name=\"load\"\n                                required>\n                            <mat-error *ngIf=\"!ulbURLSFormGroup.get('load').valid\">Enter valid Load. </mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-6 col-12\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Defective Lights\" type=\"number\" formControlName=\"light_defective\" name=\"light_defective\"\n                                required>\n                            <mat-error *ngIf=\"!ulbURLSFormGroup.get('light_defective').valid\">Enter valid defective lights. </mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-12 col-12 stepper-btns\">\n                        <button class=\"btn btn-cancel\" (click)=\"onNoClick()\">Cancel</button>&nbsp;\n\n                        <button type=\"button\" (click)=\"ULBSubmitFun()\" [disabled]=\"ulbURLSFormGroup.invalid\"\n                            class=\"btn custom-button pull-right\">{{titleService.btn.submit}}</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 3324:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/settings/settings-compoents/view-settings/view-settings.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"main-container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-primary\">\r\n                    <h5 class=\"card-title\">{{titleService.titles.admin_setting}}</h5>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <mat-tab-group #tabGroup (focusChange)=\"tabChanged($event)\" [selectedIndex]=\"selectedIndex\">\r\n                        <mat-tab label=\"Update ULB URL's\">\r\n                            <ng-template matTabContent>\r\n                                <app-view-ulb-urls></app-view-ulb-urls>\r\n                            </ng-template>\r\n                        </mat-tab>\r\n                    </mat-tab-group>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"loading-indicator\" *ngIf=\"spinnerloader\">\r\n    <mat-spinner mode=\"indeterminate\" color=\"primary\"></mat-spinner>\r\n</div>";

/***/ }),

/***/ 726:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/settings/settings-compoents/view-ulb-urls/view-ulb-urls.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"setting-container\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <button type=\"button\" (click)=\"addULBURLFun()\" class=\"btn custom-button pull-right\"\n                matTooltip=\"{{titleService.tooltip.mat_add_ulb_url}}\">\n                <i class=\"{{iconService.fa_icons.plus}}\"\n                    aria-hidden=\"true\"></i>&nbsp;&nbsp;{{titleService.btn.add_ulb_url}}\n            </button>\n        </div>\n        <div class=\"col-12\" style=\"margin-top: 25px;\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-borderless\">\n                    <thead>\n                        <tr>\n                            <th>ULB</th>\n                            <th>URL</th>\n                            <th>LED Lamps</th>\n                            <th>CCMS</th>\n                            <th>Load</th>\n                            <th>Defective Light</th>\n                            <th>Actions</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of ulbURLSData | paginate: { itemsPerPage: 10, currentPage: p };\">\n                            <td>{{item.ulb_name}}</td>\n                            <td>{{item.ulb_url}}</td>\n                            <td>{{item.total_led_lamps}}</td>\n                            <td>{{item.installed_ccms}}</td>\n                            <td>{{item.load}}</td>\n                            <td>{{item.light_defective}}</td>\n                            <td>\n                                <i matTooltip=\"{{titleService.tooltip.mat_view}}\" class=\"{{iconService.fa_icons.edit}}\"\n                                    (click)=\"editFun(item)\"></i>&nbsp;&nbsp;\n                                <i matTooltip=\"{{titleService.tooltip.mat_delete}}\"\n                                    class=\"{{iconService.fa_icons.delete}}\" (click)=\"deleteULBURLsFun(item)\"></i>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n            </div>\n            <div align=\"end\" style=\"padding: 0px !important;\" *ngIf=\"ulbURLSData.length>10\">\n                <pagination-controls (pageChange)=\"pagination($event)\" previousLabel=\"\" nextLabel=\"\">\n                </pagination-controls>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"loading-indicator\" *ngIf=\"spinnerloader\">\n    <mat-spinner mode=\"indeterminate\" color=\"primary\"></mat-spinner>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_modules_settings_settings_module_ts.js.map