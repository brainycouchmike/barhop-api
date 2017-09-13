webpackJsonp([0],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentPage = (function () {
    function ContentPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContentPage;
}());
ContentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'page-content',template:/*ion-inline-start:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/content/content.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Content\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>\n    This is a perfect starting point for a page with primarily text content. The\n    body is padded nicely and ready for prose.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/content/content.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], ContentPage);

//# sourceMappingURL=content.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_create_item_create__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_detail_item_detail__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListMasterPage = (function () {
    function ListMasterPage(navCtrl, items, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.currentItems = [];
        this.items.query().subscribe(function (items) {
            _this.currentItems = items;
            console.log("Loading current Items", items);
        }, function (err) {
            console.debug('ListMasterPage:items.query:error', err);
            return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        });
    }
    /**
     * The view loaded, let's query our items for the list
     */
    ListMasterPage.prototype.ionViewDidLoad = function () {
    };
    /**
     * Prompt the user to add a new item. This shows our ItemCreatePage in a
     * modal and then adds the new item to our data source if the user created one.
     */
    ListMasterPage.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__item_create_item_create__["a" /* ItemCreatePage */]);
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.items.add(item).subscribe(function (resp) {
                    _this.currentItems.push(resp.json());
                }, function (err) {
                    // do something with the error, i.e. Toast failure, retry?:
                    _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__item_create_item_create__["a" /* ItemCreatePage */], item);
                });
            }
        });
        addModal.present();
    };
    /**
     * Delete an item from the list of items.
     */
    ListMasterPage.prototype.deleteItem = function (item) {
        this.items.delete(item);
    };
    /**
     * Navigate to the detail page for this item.
     */
    ListMasterPage.prototype.openItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__item_detail_item_detail__["a" /* ItemDetailPage */], {
            item: item
        });
    };
    return ListMasterPage;
}());
ListMasterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'page-list-master',template:/*ion-inline-start:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/list-master/list-master.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'LIST_MASTER_TITLE\' | translate }}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addItem()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of currentItems">\n      <button ion-item (click)="openItem(item)">\n        <ion-avatar item-start>\n          <!--<img [src]="item.profilePic" />-->\n        </ion-avatar>\n        <h2>{{item.key}}</h2>\n        <p>{{item.value}}</p>\n        <!--<ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>-->\n      </button>\n\n      <ion-item-options>\n        <button ion-button color="danger" (click)="deleteItem(item)">\n          {{ \'DELETE_BUTTON\' | translate }}\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/list-master/list-master.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_providers__["a" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], ListMasterPage);

//# sourceMappingURL=list-master.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemDetailPage = (function () {
    function ItemDetailPage(navCtrl, navParams, items) {
        this.navCtrl = navCtrl;
        this.item = navParams.get('item'); // || items.defaultItem;
    }
    return ItemDetailPage;
}());
ItemDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'page-item-detail',template:/*ion-inline-start:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/item-detail/item-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ item.name }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="item-profile" text-center #profilePic [style.background-image]="\'url(\' + item.profilePic + \')\'">\n  </div>\n\n  <div class="item-detail" padding>\n    <h2>{{item.key}}</h2>\n    <p>{{item.value}}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/item-detail/item-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Items */]])
], ItemDetailPage);

//# sourceMappingURL=item-detail.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    return Settings;
}());
Settings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
], Settings);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_detail_item_detail__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, items) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = items;
        this.currentItems = [];
    }
    /**
     * Perform a service for the proper items.
     */
    SearchPage.prototype.getItems = function (ev) {
        var _this = this;
        var val = ev.target.value;
        if (!val || !val.trim()) {
            this.currentItems = [];
            return;
        }
        this.items.query({
            name: val
        }).subscribe(function (items) {
            _this.currentItems = items;
        });
    };
    /**
     * Navigate to the detail page for this item.
     */
    SearchPage.prototype.openItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_detail_item_detail__["a" /* ItemDetailPage */], {
            item: item
        });
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/search/search.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'SEARCH_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="{{ \'SEARCH_PLACEHOLDER\' | translate }}"></ion-searchbar>\n  <ion-list>\n    <button ion-item (click)="openItem(item)" *ngFor="let item of currentItems">\n      <ion-avatar item-start>\n        <img [src]="item.profilePic" />\n      </ion-avatar>\n      <h2>{{item.key}}</h2>\n      <p>{{item.value}}</p>\n      <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/search/search.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_providers__["a" /* Items */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
var SettingsPage = SettingsPage_1 = (function () {
    function SettingsPage(navCtrl, settings, formBuilder, navParams, translate) {
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.translate = translate;
        this.settingsReady = false;
        this.profileSettings = {
            page: 'profile',
            pageTitleKey: 'SETTINGS_PAGE_PROFILE'
        };
        this.page = 'main';
        this.pageTitleKey = 'SETTINGS_TITLE';
        this.subSettings = SettingsPage_1;
    }
    SettingsPage.prototype._buildForm = function () {
        var _this = this;
        var group = {
            option1: [this.options.option1],
            option2: [this.options.option2],
            option3: [this.options.option3]
        };
        switch (this.page) {
            case 'main':
                break;
            case 'profile':
                group = {
                    option4: [this.options.option4]
                };
                break;
        }
        this.form = this.formBuilder.group(group);
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.settings.merge(_this.form.value);
        });
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        // Build an empty form for the template to render
        this.form = this.formBuilder.group({});
    };
    SettingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // Build an empty form for the template to render
        this.form = this.formBuilder.group({});
        this.page = this.navParams.get('page') || this.page;
        this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;
        this.translate.get(this.pageTitleKey).subscribe(function (res) {
            _this.pageTitle = res;
        });
        this.settings.load().then(function () {
            _this.settingsReady = true;
            _this.options = _this.settings.allSettings;
            _this._buildForm();
        });
    };
    SettingsPage.prototype.ngOnChanges = function () {
        console.log('Ng All Changes');
    };
    return SettingsPage;
}());
SettingsPage = SettingsPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ pageTitle }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]="form" *ngIf="settingsReady">\n    <ion-list *ngIf="page == \'main\'">\n      <ion-item>\n        <ion-label>{{ \'SETTINGS_OPTION1\' | translate }}</ion-label>\n        <ion-toggle formControlName="option1"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ \'SETTINGS_OPTION2\' | translate }}</ion-label>\n        <ion-input formControlName="option2"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ \'SETTINGS_OPTION3\' | translate }}</ion-label>\n        <ion-select formControlName="option3">\n          <ion-option value="1" checked="true">1</ion-option>\n          <ion-option value="2">2</ion-option>\n          <ion-option value="3">3</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <button ion-item [navPush]="subSettings" [navParams]="profileSettings">\n        {{ \'SETTINGS_PROFILE_BUTTON\' | translate }}\n      </button>\n    </ion-list>\n\n    <ion-list *ngIf="page == \'profile\'">\n      <ion-item>\n        <ion-label>{{ \'SETTINGS_OPTION4\' | translate }}</ion-label>\n        <ion-input formControlName="option4"></ion-input>\n      </ion-item>\n    </ion-list>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/settings/settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_settings__["a" /* Settings */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
], SettingsPage);

var SettingsPage_1;
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page__ = __webpack_require__(237);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TutorialPage = (function (_super) {
    __extends(TutorialPage, _super);
    function TutorialPage(navCtrl, menu, translate) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.menu = menu;
        _this.showSkip = true;
        translate.get(["TUTORIAL_SLIDE1_TITLE",
            "TUTORIAL_SLIDE1_DESCRIPTION",
            "TUTORIAL_SLIDE2_TITLE",
            "TUTORIAL_SLIDE2_DESCRIPTION",
            "TUTORIAL_SLIDE3_TITLE",
            "TUTORIAL_SLIDE3_DESCRIPTION",
        ]).subscribe(function (values) {
            console.log('Loaded values', values);
            _this.slides = [
                {
                    title: values.TUTORIAL_SLIDE1_TITLE,
                    description: values.TUTORIAL_SLIDE1_DESCRIPTION,
                    image: 'assets/img/ica-slidebox-img-1.png',
                },
                {
                    title: values.TUTORIAL_SLIDE2_TITLE,
                    description: values.TUTORIAL_SLIDE2_DESCRIPTION,
                    image: 'assets/img/ica-slidebox-img-2.png',
                },
                {
                    title: values.TUTORIAL_SLIDE3_TITLE,
                    description: values.TUTORIAL_SLIDE3_DESCRIPTION,
                    image: 'assets/img/ica-slidebox-img-3.png',
                }
            ];
        });
        return _this;
    }
    TutorialPage.prototype.startApp = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__welcome_welcome__["a" /* WelcomePage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    return TutorialPage;
}(__WEBPACK_IMPORTED_MODULE_4__page__["a" /* Page */]));
TutorialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'page-tutorial',template:/*ion-inline-start:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/tutorial/tutorial.html"*/'<ion-header no-shadow>\n  <ion-navbar>\n    <ion-buttons end *ngIf="showSkip">\n      <button ion-button (click)="startApp()" color="primary">{{ \'TUTORIAL_SKIP_BUTTON\' | translate}}</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <ion-slides pager="true" (ionSlideWillChange)="onSlideChangeStart($event)">\n    <ion-slide *ngFor="let slide of slides">\n      <img [src]="slide.image" class="slide-image" />\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image" />\n      <h2 class="slide-title">{{ \'TUTORIAL_SLIDE4_TITLE\' | translate }}</h2>\n      <button ion-button icon-end large clear (click)="startApp()">\n        {{ \'TUTORIAL_CONTINUE_BUTTON\' | translate }}\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/tutorial/tutorial.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
], TutorialPage);

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 142;

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardsPage = (function () {
    function CardsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.cardItems = [
            {
                user: {
                    avatar: 'assets/img/marty-avatar.png',
                    name: 'Marty McFly'
                },
                date: 'November 5, 1955',
                image: 'assets/img/advance-card-bttf.png',
                content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
            },
            {
                user: {
                    avatar: 'assets/img/sarah-avatar.png.jpeg',
                    name: 'Sarah Connor'
                },
                date: 'May 12, 1984',
                image: 'assets/img/advance-card-tmntr.jpg',
                content: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.'
            },
            {
                user: {
                    avatar: 'assets/img/ian-avatar.png',
                    name: 'Dr. Ian Malcolm'
                },
                date: 'June 28, 1990',
                image: 'assets/img/advance-card-jp.jpg',
                content: 'Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.'
            }
        ];
    }
    return CardsPage;
}());
CardsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'page-cards',template:/*ion-inline-start:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/cards/cards.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'CARDS_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card *ngFor="let item of cardItems">\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="item.user.avatar">\n      </ion-avatar>\n      <h2>{{item.user.name}}</h2>\n      <p>{{item.date}}</p>\n    </ion-item>\n\n    <img [src]="item.image">\n\n    <ion-card-content>\n      <p>{{item.content}}</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n            <ion-icon name=\'thumbs-up\'></ion-icon>\n            12 Likes\n          </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n            <ion-icon name=\'text\'></ion-icon>\n            4 Comments\n          </button>\n      </ion-col>\n      <ion-col center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/cards/cards.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], CardsPage);

//# sourceMappingURL=cards.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemCreatePage = (function () {
    function ItemCreatePage(navCtrl, viewCtrl, formBuilder, camera) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.form = formBuilder.group({
            profilePic: [''],
            key: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            value: ['']
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    ItemCreatePage.prototype.ionViewDidLoad = function () {
    };
    ItemCreatePage.prototype.getPicture = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                targetWidth: 96,
                targetHeight: 96
            }).then(function (data) {
                _this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
            }, function (err) {
                alert('Unable to take photo');
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    ItemCreatePage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.form.patchValue({ 'profilePic': imageData });
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    ItemCreatePage.prototype.getProfileImageStyle = function () {
        return 'url(' + this.form.controls['profilePic'].value + ')';
    };
    /**
     * The user cancelled, so we dismiss without sending data back.
     */
    ItemCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * The user is done and wants to create the item, so return it
     * back to the presenter.
     */
    ItemCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.form.value);
    };
    return ItemCreatePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], ItemCreatePage.prototype, "fileInput", void 0);
ItemCreatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'page-item-create',template:/*ion-inline-start:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/item-create/item-create.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'ITEM_CREATE_TITLE\' | translate }}</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="cancel()">\n        <span color="primary" showWhen="ios">\n          {{ \'CANCEL_BUTTON\' | translate }}\n        </span>\n        <ion-icon name="md-close" showWhen="core,android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n        <span color="primary" showWhen="ios">\n          {{ \'DONE_BUTTON\' | translate }}\n        </span>\n        <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <form *ngIf="form" [formGroup]="form" (ngSubmit)="createItem()">\n    <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n    <div class="profile-image-wrapper" (click)="getPicture()">\n      <div class="profile-image-placeholder" *ngIf="!this.form.controls.profilePic.value">\n        <ion-icon name="add"></ion-icon>\n        <div>\n          {{ \'ITEM_CREATE_CHOOSE_IMAGE\' | translate }}\n        </div>\n      </div>\n      <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.profilePic.value"></div>\n    </div>\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'ITEM_NAME_PLACEHOLDER\' | translate }}" formControlName="key"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'ITEM_ABOUT_PLACEHOLDER\' | translate }}" formControlName="value"></ion-input>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/item-create/item-create.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
], ItemCreatePage);

//# sourceMappingURL=item-create.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Items = (function () {
    function Items(http, api) {
        this.http = http;
        this.api = api;
    }
    Items.prototype.query = function (params) {
        return this.api.get('user_attrs', params)
            .map(function (resp) { return resp.json(); });
    };
    Items.prototype.add = function (item) {
        var newAttrObs = this.api.post('user_attrs', item).share();
        newAttrObs.map(function (resp) { return resp.json(); })
            .subscribe(function (resp) {
            console.log('Attr Added', resp);
        }, function (err) {
            console.error('ERROR', err);
        });
        return newAttrObs;
    };
    Items.prototype.delete = function (item) {
    };
    return Items;
}());
Items = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__api__["a" /* Api */]])
], Items);

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var Page = (function () {
    function Page() {
    }
    return Page;
}());

//# sourceMappingURL=page.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapPage = (function () {
    function MapPage(googleMaps, navCtrl, platform) {
        this.googleMaps = googleMaps;
        this.navCtrl = navCtrl;
        this.platform = platform;
    }
    MapPage.prototype.ngAfterViewInit = function () {
        this.loadMap();
    };
    MapPage.prototype.loadMap = function () {
        // make sure to create following structure in your view.html file
        // and add a height (for example 100%) to it, else the map won't be visible
        // <ion-content>
        //  <div #map id="map" style="height:100%;"></div>
        // </ion-content>
        // create a new map by passing HTMLElement
        var element = document.getElementById('map');
        var map = this.googleMaps.create(element);
        // listen to MAP_READY event
        // You must wait for this event to fire before adding something to the map or modifying it in anyway
        map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).then(function () { return console.log('Map is ready!'); });
        // create LatLng object
        var ionic = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["c" /* LatLng */](43.0741904, -89.3809802);
        // create CameraPosition
        var position = {
            target: ionic,
            zoom: 18,
            tilt: 30
        };
        // move the map's camera to position
        map.moveCamera(position);
        // create new marker
        //  let markerOptions: MarkerOptions = {
        //    position: ionic,
        //    title: 'Ionic'
        //  };
        //  const marker: Marker = map.addMarker(markerOptions)
        //    .then((marker: Marker) => {
        //       marker.showInfoWindow();
        //     });
        //  }
        // initJSMaps(mapEle) {
        //   new google.maps.Map(mapEle, {
        //     center: { lat: 43.071584, lng: -89.380120 },
        //     zoom: 16
        //   });
        // }
        // initNativeMaps(mapEle) {
        //   this.map = new GoogleMap(mapEle);
        //   mapEle.classList.add('show-map');
        //   GoogleMap.isAvailable().then(() => {
        //     const position = new GoogleMapsLatLng(43.074395, -89.381056);
        //     this.map.setPosition(position);
        //   });
        // }
        // ionViewDidLoad() {
        //   let mapEle = this.map.nativeElement;
        //   if (!mapEle) {
        //     console.error('Unable to initialize map, no map element with #map view reference.');
        //     return;
        //   }
        //   // Disable this switch if you'd like to only use JS maps, as the APIs
        //   // are slightly different between the two. However, this makes it easy
        //   // to use native maps while running in Cordova, and JS maps on the web.
        //   if (this.platform.is('cordova') === true) {
        //     this.initNativeMaps(mapEle);
        //   } else {
        //     this.initJSMaps(mapEle);
        //   }
        // }
    };
    return MapPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('map'),
    __metadata("design:type", Object)
], MapPage.prototype, "map", void 0);
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'page-map',template:/*ion-inline-start:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/map/map.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'MAP_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/map/map.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_content__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuPage = (function () {
    function MenuPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__content_content__["a" /* ContentPage */];
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Sign in', component: __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */] },
            { title: 'Signup', component: __WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */] }
        ];
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('Hello MenuPage Page');
    };
    MenuPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MenuPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MenuPage.prototype, "nav", void 0);
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/menu/menu.html"*/'<ion-menu [content]="content">\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/menu/menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_welcome_welcome__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {TabsPage} from "../../pages/tabs/tabs";
var AuthGuard = (function () {
    function AuthGuard(app, user) {
        this.app = app;
        this.user = user;
    }
    Object.defineProperty(AuthGuard.prototype, "navCtrl", {
        get: function () {
            return this.app.getRootNav();
        },
        enumerable: true,
        configurable: true
    });
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.user.getAuthToken().then(function (auth_token) {
            console.log("got auth token", auth_token);
            // this.navCtrl.setRoot(TabsPage);
            return true;
        }, function (err) {
            // not logged in so redirect to login page
            // this.router.navigate(['/#/login']);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_welcome_welcome__["a" /* WelcomePage */]);
            return false;
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_user__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_user__["a" /* User */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(253);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cards_cards__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_content_content__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_item_create_item_create__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_item_detail_item_detail__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_list_master_list_master__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_map_map__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_menu_menu__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_search_search__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tutorial_tutorial__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_welcome_welcome__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_api__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_items__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_settings__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_user__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_camera__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_google_maps__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ngx_translate_http_loader__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__app_routing__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__guards_auth_guard__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_29__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_22__providers_settings__["a" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello',
        api_base: 'https://barhop-rails-api.herokuapp.com/api/'
    });
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* BarHop */],
            __WEBPACK_IMPORTED_MODULE_6__pages_cards_cards__["a" /* CardsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_content_content__["a" /* ContentPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_item_create_item_create__["a" /* ItemCreatePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_item_detail_item_detail__["a" /* ItemDetailPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_list_master_list_master__["a" /* ListMasterPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_tutorial_tutorial__["a" /* TutorialPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_welcome_welcome__["a" /* WelcomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_28__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_28__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* BarHop */]),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_30__app_routing__["a" /* routing */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* BarHop */],
            __WEBPACK_IMPORTED_MODULE_6__pages_cards_cards__["a" /* CardsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_content_content__["a" /* ContentPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_item_create_item_create__["a" /* ItemCreatePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_item_detail_item_detail__["a" /* ItemDetailPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_list_master_list_master__["a" /* ListMasterPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_tutorial_tutorial__["a" /* TutorialPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_welcome_welcome__["a" /* WelcomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_31__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_20__providers_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_21__providers_items__["a" /* Items */],
            __WEBPACK_IMPORTED_MODULE_23__providers_user__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_status_bar__["a" /* StatusBar */],
            { provide: __WEBPACK_IMPORTED_MODULE_22__providers_settings__["a" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]] },
            // Keep this to enable Ionic's runtime error handling during development
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarHop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_cards_cards__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_content_content__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_master_list_master__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_map_map__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_menu_menu__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_search_search__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tutorial_tutorial__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_welcome_welcome__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_providers__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngx_translate_core__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var BarHop = (function () {
    function BarHop(translate, platform, settings, config, statusBar, splashScreen) {
        this.translate = translate;
        this.platform = platform;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */];
        this.pages = [
            { title: 'Tutorial', component: __WEBPACK_IMPORTED_MODULE_14__pages_tutorial_tutorial__["a" /* TutorialPage */] },
            { title: 'Welcome', component: __WEBPACK_IMPORTED_MODULE_15__pages_welcome_welcome__["a" /* WelcomePage */] },
            { title: 'Tabs', component: __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */] },
            { title: 'Cards', component: __WEBPACK_IMPORTED_MODULE_4__pages_cards_cards__["a" /* CardsPage */] },
            { title: 'Content', component: __WEBPACK_IMPORTED_MODULE_5__pages_content_content__["a" /* ContentPage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */] },
            { title: 'Signup', component: __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */] },
            { title: 'Map', component: __WEBPACK_IMPORTED_MODULE_8__pages_map_map__["a" /* MapPage */] },
            { title: 'Master Detail', component: __WEBPACK_IMPORTED_MODULE_6__pages_list_master_list_master__["a" /* ListMasterPage */] },
            { title: 'Menu', component: __WEBPACK_IMPORTED_MODULE_9__pages_menu_menu__["a" /* MenuPage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */] },
            { title: 'Search', component: __WEBPACK_IMPORTED_MODULE_10__pages_search_search__["a" /* SearchPage */] }
        ];
        this.initTranslate();
    }
    BarHop.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    BarHop.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        if (this.translate.getBrowserLang() !== undefined) {
            this.translate.use(this.translate.getBrowserLang());
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    BarHop.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return BarHop;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], BarHop.prototype, "nav", void 0);
BarHop = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: "<ion-menu [content]=\"content\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Pages</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n  <ion-nav #content [root]=\"rootPage\"></ion-nav>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_17__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_16__providers_providers__["b" /* Settings */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], BarHop);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_login_login__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pages__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_index__ = __webpack_require__(332);




var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__pages_login_login__["a" /* LoginPage */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages_pages__["a" /* MainPage */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_index__["a" /* AuthGuard */]] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: false });
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = (function () {
    function User(http, api, storage) {
        this.http = http;
        this.api = api;
        this.storage = storage;
    }
    User.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get("auth_token").then(function (auth_token) {
            if (auth_token) {
                _this._loggedIn({
                    auth_token: auth_token
                }).catch(function (reason) {
                    _this.logout();
                });
            }
        });
    };
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('auth/login', accountInfo).share();
        seq
            .subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.ok)
                if (typeof res.json().auth_token === 'string') {
                    return _this._loggedIn(res.json());
                }
                else {
                }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('auth/signup', accountInfo).share();
        seq
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (typeof res.auth_token === 'string') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Get auth token from user or null if not loggedIn
     */
    User.prototype.getAuthToken = function () {
        return (this._user && this._user['auth_token']) || this.storage.get('auth_token');
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    Object.defineProperty(User.prototype, "isLoggedIn", {
        get: function () {
            return this._user != null && typeof this._user['auth_token'] == 'string';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp;
        return this.storage.set('auth_token', resp['auth_token']);
    };
    Object.defineProperty(User.prototype, "validate", {
        get: function () {
            var _this = this;
            var req = this.api.post('auth/verify', {
                auth_token: this.getAuthToken()
            }).share();
            req.subscribe(function (resp) {
                _this._loggedIn(resp);
            }, function (err) {
                console.error("Validate Error", err);
            });
            return req;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
User = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__api__["a" /* Api */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api__["a" /* Api */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _c || Object])
], User);

var _a, _b, _c;
//# sourceMappingURL=user.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__(242);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pages__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, user, toastCtrl, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            email: 'test@example.com',
            password: 'test'
        };
        this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
        });
    }
    // Attempt to login in through our User service
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.user.login(this.account).subscribe(function (req) {
            console.debug(req, __WEBPACK_IMPORTED_MODULE_2__pages_pages__["a" /* MainPage */], __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
            return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
        }, function (err) {
            console.log('login error detail:', err);
            // Unable to log in
            var toast = _this.toastCtrl.create({
                message: _this.loginErrorString,
                duration: 3000,
                position: 'top'
            });
            return toast.present();
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'LOGIN_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <form (submit)="doLogin()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label fixed>{{ \'EMAIL\' | translate }}</ion-label>\n        <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n      </ion-item>\n\n      <!--\n      Want to use a Username instead of an Email? Here you go:\n\n      <ion-item>\n        <ion-label floating>{{ \'USERNAME\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n      </ion-item>\n      -->\n\n      <ion-item>\n        <ion-label fixed>{{ \'PASSWORD\' | translate }}</ion-label>\n        <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block>{{ \'LOGIN_BUTTON\' | translate }}</button>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* User */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FirstRunPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Tab3Root; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_master_list_master__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tutorial_tutorial__ = __webpack_require__(130);





// The page the user lands on after opening the app and without a session
var FirstRunPage = __WEBPACK_IMPORTED_MODULE_4__tutorial_tutorial__["a" /* TutorialPage */];
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */];
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = __WEBPACK_IMPORTED_MODULE_0__list_master_list_master__["a" /* ListMasterPage */];
var Tab2Root = __WEBPACK_IMPORTED_MODULE_1__search_search__["a" /* SearchPage */];
var Tab3Root = __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */];
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__items__ = __webpack_require__(232);
/* unused harmony reexport User */
/* unused harmony reexport Api */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__items__["a"]; });





//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = (function () {
    function Api(http, injector, settings) {
        this.http = http;
        this.injector = injector;
        this.settings = settings;
        // url: string = 'http'+(window.location.hostname=='localhost'?'':'s')+'://'+window.location.host+'/api/';
        this.url = 'https://barhop-rails-api.herokuapp.com/api/';
    }
    Object.defineProperty(Api.prototype, "user", {
        get: function () {
            return this.injector.get(__WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]);
        },
        enumerable: true,
        configurable: true
    });
    Api.prototype.addAuthorizationHeader = function (options) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Authorization', this.user.getAuthToken());
        return (options || new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]()).merge({
            headers: headers
        });
    };
    Api.prototype.get = function (endpoint, params, options) {
        if (!options) {
            options = this.addAuthorizationHeader(options);
        }
        // Support easy query params for GET requests
        if (params) {
            var p = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
            for (var k in params) {
                p.set(k, params[k]);
            }
            // Set the search field if we have params and don't already have
            // a search field set in options.
            options.search = !options.search && p || options.search;
        }
        return this.http.get(this.url + endpoint, options);
    };
    Api.prototype.post = function (endpoint, body, options) {
        options = this.addAuthorizationHeader(options);
        return this.http.post(this.url + endpoint, body, options);
    };
    Api.prototype.put = function (endpoint, body, options) {
        options = this.addAuthorizationHeader(options);
        return this.http.put(this.url + endpoint, body, options);
    };
    Api.prototype.delete = function (endpoint, options) {
        options = this.addAuthorizationHeader(options);
        return this.http.delete(this.url + endpoint, options);
    };
    Api.prototype.patch = function (endpoint, body, options) {
        options = this.addAuthorizationHeader(options);
        return this.http.put(this.url + endpoint, body, options);
    };
    return Api;
}());
Api = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__settings__["a" /* Settings */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__settings__["a" /* Settings */]) === "function" && _c || Object])
], Api);

var _a, _b, _c;
//# sourceMappingURL=api.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page__ = __webpack_require__(237);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function (_super) {
    __extends(TabsPage, _super);
    function TabsPage(navCtrl, translateService) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.translateService = translateService;
        _this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__pages__["b" /* Tab1Root */];
        _this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__pages__["c" /* Tab2Root */];
        _this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__pages__["d" /* Tab3Root */];
        _this.tab1Title = " ";
        _this.tab2Title = " ";
        _this.tab3Title = " ";
        translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(function (values) {
            _this.tab1Title = values['TAB1_TITLE'];
            _this.tab2Title = values['TAB2_TITLE'];
            _this.tab3Title = values['TAB3_TITLE'];
        });
        return _this;
    }
    return TabsPage;
}(__WEBPACK_IMPORTED_MODULE_4__page__["a" /* Page */]));
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" [tabTitle]="tab1Title" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" [tabTitle]="tab2Title" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab3Root" [tabTitle]="tab3Title" tabIcon="cog"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
var WelcomePage = (function () {
    function WelcomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    WelcomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/welcome/welcome.html"*/'<ion-content scroll="false">\n  <div class="splash-bg"></div>\n  <div class="splash-info">\n    <div class="splash-logo"></div>\n    <div class="splash-intro">\n      {{ \'WELCOME_INTRO\' | translate }}\n    </div>\n  </div>\n  <div padding>\n    <button ion-button block (click)="signup()" class="signup">{{ \'SIGNUP\' | translate }}</button>\n    <button ion-button block (click)="login()" class="login">{{ \'LOGIN\' | translate }}</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/welcome/welcome.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pages__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = (function () {
    function SignupPage(navCtrl, user, toastCtrl, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            name: 'Test Human',
            email: 'test@example.com',
            password: 'test',
            fname: 'Test',
            lname: 'Human'
        };
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signupErrorString = value;
        });
    }
    SignupPage.prototype.setNameParts = function () {
        var name = this.account.name.split(' ');
        this.account.fname = name.shift();
        this.account.lname = name.join(' ');
    };
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        // Attempt to login in through our User service
        this.setNameParts();
        this.user.signup(this.account).subscribe(function (resp) {
            console.log(resp);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_pages__["a" /* MainPage */]);
        }, function (err) {
            var message = _this.signupErrorString;
            if (err.hasOwnProperty('message')) {
                message = err.message;
            }
            else if (typeof err._body == 'string') {
                var body = err.json();
                if (typeof body.message == 'string') {
                    if (body.message.match(/Lname can't be blank/)) {
                        _this.translateService.get('SIGNUP_ERROR_LNAME').subscribe(function (value) {
                            message = value;
                        });
                    }
                    else if (body.message.match(/Email can't be blank/)) {
                        _this.translateService.get('SIGNUP_ERROR_EMAIL').subscribe(function (value) {
                            message = value;
                        });
                    }
                    else {
                        message = body.message;
                    }
                }
            }
            // Unable to sign up
            _this.toastCtrl.create({
                message: message,
                duration: 3000,
                position: 'top'
            }).present();
        });
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/signup/signup.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'SIGNUP_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <form (submit)="doSignup()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label fixed>{{ \'NAME\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.name" name="name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'EMAIL\' | translate }}</ion-label>\n        <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n      </ion-item>\n\n      <!--\n      Want to add a Username? Here you go:\n\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n      </ion-item>\n      -->\n\n      <ion-item>\n        <ion-label fixed>{{ \'PASSWORD\' | translate }}</ion-label>\n        <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block>{{ \'SIGNUP_BUTTON\' | translate }}</button>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/brainycouch/Projects/barhop/mobile-app/src/pages/signup/signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user__["a" /* User */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ })

},[243]);
//# sourceMappingURL=main.js.map