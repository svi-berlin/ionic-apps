webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_library__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.homePage = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.libraryPage = __WEBPACK_IMPORTED_MODULE_2__library_library__["a" /* LibraryPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/home/mifune/ionic-apps/ionic-apps/tutorial/svi001/app3/burmese-vocabulary/src/pages/tabs/tabs.html"*/'<ion-tabs>\n	<ion-tab [root]="homePage" tabTitle="Favorites" tabIcon="star"></ion-tab>\n	<ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/home/mifune/ionic-apps/ionic-apps/tutorial/svi001/app3/burmese-vocabulary/src/pages/tabs/tabs.html"*/,
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_vocabulary__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vocabulary_vocabulary__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LibraryPage = /** @class */ (function () {
    function LibraryPage() {
        this.vocabularyPage = __WEBPACK_IMPORTED_MODULE_2__vocabulary_vocabulary__["a" /* VocabularyPage */];
    }
    LibraryPage.prototype.ngOnInit = function () {
        this.vocabularyCollection = __WEBPACK_IMPORTED_MODULE_1__data_vocabulary__["a" /* default */];
    };
    LibraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-library',template:/*ion-inline-start:"/home/mifune/ionic-apps/ionic-apps/tutorial/svi001/app3/burmese-vocabulary/src/pages/library/library.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Vokabeln</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h3 text-center>Deutsch - Burmesisch</h3>\n<ion-list>\n	\n	<button \n	ion-item \n	*ngFor="let vocabularyGroup of vocabularyCollection"\n	[navPush]="vocabularyPage" \n	[navParams]="vocabularyGroup">\n		<ion-icon [name]="vocabularyGroup.icon" item-left></ion-icon>\n		<h2>{{ vocabularyGroup.category | uppercase }}</h2>\n		<p>{{ vocabularyGroup.vocabulary.length }} Vokabeln</p>\n	</button>\n\n\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/mifune/ionic-apps/ionic-apps/tutorial/svi001/app3/burmese-vocabulary/src/pages/library/library.html"*/,
        })
    ], LibraryPage);
    return LibraryPage;
}());

//# sourceMappingURL=library.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VocabularyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VocabularyPage = /** @class */ (function () {
    function VocabularyPage(navParams) {
        this.navParams = navParams;
    }
    VocabularyPage.prototype.ngOnInit = function () {
        this.vocabularyGroup = this.navParams.data;
    };
    VocabularyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vocabulary',template:/*ion-inline-start:"/home/mifune/ionic-apps/ionic-apps/tutorial/svi001/app3/burmese-vocabulary/src/pages/vocabulary/vocabulary.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ vocabularyGroup.category | uppercase }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<!--	\n	<ion-card *ngFor="let vocabulary of vocabularyGroup.vocabulary; let i = index">\n		<ion-card-header>\n			#{{i+1}}\n		</ion-card-header>\n		<ion-card-content>\n			<p>{{ vocabulary.german }}</p>\n			<p class="author">{{ vocabulary.burmese }}</p>\n		</ion-card-content>\n		<ion-row>\n			<ion-col text-right>\n				<button \n				ion-button \n				clear \n				small \n				(click)="onAddToFavorite(quote)">Favorite</button>\n			</ion-col>\n		</ion-row>\n	</ion-card>\n-->\n\n	<flash-card *ngFor="let vocabulary of vocabularyGroup.vocabulary; let i = index">\n	 \n	    <div class="flash-card-front">{{ vocabulary.german }}</div>\n	 \n	    <div class="flash-card-back">{{ vocabulary.burmese }}</div>\n	 \n	</flash-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/mifune/ionic-apps/ionic-apps/tutorial/svi001/app3/burmese-vocabulary/src/pages/vocabulary/vocabulary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], VocabularyPage);
    return VocabularyPage;
}());

//# sourceMappingURL=vocabulary.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_library_library__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_vocabulary_vocabulary__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_flash_card_flash_card__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_library_library__["a" /* LibraryPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_vocabulary_vocabulary__["a" /* VocabularyPage */],
                __WEBPACK_IMPORTED_MODULE_9__components_flash_card_flash_card__["a" /* FlashCardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_library_library__["a" /* LibraryPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_vocabulary_vocabulary__["a" /* VocabularyPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/mifune/ionic-apps/ionic-apps/tutorial/svi001/app3/burmese-vocabulary/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/mifune/ionic-apps/ionic-apps/tutorial/svi001/app3/burmese-vocabulary/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        category: 'Pronomen',
        vocabulary: [
            {
                id: '20',
                german: 'ich (Junge / Mädchen)',
                burmese: 'ca-naw / ca-ma'
            },
            {
                id: '21',
                german: 'er / sie',
                burmese: 'thu'
            },
            {
                id: '22',
                german: 'sie (Plural)',
                burmese: 'thu-du'
            }
        ],
        icon: 'brush'
    },
    {
        category: 'Verben',
        vocabulary: [
            {
                id: '1',
                german: 'sprechen, sagen',
                burmese: 'pyaw-deh'
            },
            {
                id: '2',
                german: 'fähig sein, etwas zu tun',
                burmese: 'Verb + taq-teh'
            },
            {
                id: '3',
                german: 'sprechen können',
                burmese: 'pyaw-taq-teh'
            },
            {
                id: '18',
                german: 'haben',
                burmese: 'shi-deh'
            },
            {
                id: '19',
                german: 'gehabt haben',
                burmese: 'shi-bi'
            }
        ],
        icon: 'brush'
    },
    {
        category: 'Substantive',
        vocabulary: [
            {
                id: '4',
                german: 'Sprache',
                burmese: 'za-ga'
            },
            {
                id: '5',
                german: 'Burmesisch, burmesische Sprache',
                burmese: 'ba-ma-za-ga'
            },
            {
                id: '6',
                german: 'Französisch, französische Sprache',
                burmese: 'pyin-thiq-za-ga'
            },
            {
                id: '7',
                german: 'Chinesisch, chinesische Sprache',
                burmese: 'ta-youq-za-ga'
            },
            {
                id: '16',
                german: 'Alter',
                burmese: 'a-theq'
            },
            {
                id: '17',
                german: 'Jahr',
                burmese: 'hniq'
            }
        ],
        icon: 'brush'
    },
    {
        category: 'Fragen und Antworten',
        vocabulary: [
            {
                id: '8',
                german: 'Welche Sprache kannst du sprechen?',
                burmese: 'ba-za-ga pyaw-taq-leh.'
            },
            {
                id: '9',
                german: 'Ich kann Burmesisch sprechen. (Junge)',
                burmese: 'ca-naw ba-ma-za-ga pyaw-taq-teh.'
            },
            {
                id: '10',
                german: 'Ich kann Burmesisch und Französisch sprechen.',
                burmese: 'ca-ma ba-ma-za-ga pyaw-taq-teh pi-daw pyin-thiq za-ga pyaw-taq-teh.'
            },
            {
                id: '11',
                german: 'Chinesisch, chinesische Sprache',
                burmese: 'ta-youq-za-ga'
            },
            {
                id: '12',
                german: 'Wo kommst du her?',
                burmese: 'beh-ga la-leh.'
            },
            {
                id: '13',
                german: 'Ich komme aus Mandalay. (Junge)',
                burmese: 'ca-naw Mandalay-ga la-ba-deh.'
            },
            {
                id: '14',
                german: 'Wie alt bist du?',
                burmese: 'a-theq beh-lauq-leh.'
            },
            {
                id: '15',
                german: 'Ich bin (22 Jahre) alt.',
                burmese: 'a-theq (hna-s eh-hna) hniq-pa.'
            }
        ],
        icon: 'brush'
    }
]);
//# sourceMappingURL=vocabulary.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/mifune/ionic-apps/ionic-apps/tutorial/svi001/app3/burmese-vocabulary/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>\n      Flash Cards\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n \n    <flash-card>\n \n        <div class="flash-card-front">FLASH CARDS</div>\n \n        <div class="flash-card-back">ARE COOL!</div>\n \n    </flash-card>\n \n</ion-content>'/*ion-inline-end:"/home/mifune/ionic-apps/ionic-apps/tutorial/svi001/app3/burmese-vocabulary/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlashCardComponent = /** @class */ (function () {
    function FlashCardComponent() {
        this.flipped = false;
    }
    FlashCardComponent.prototype.flip = function () {
        this.flipped = !this.flipped;
    };
    FlashCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'flash-card',template:/*ion-inline-start:"/home/mifune/ionic-apps/ionic-apps/tutorial/svi001/app3/burmese-vocabulary/src/components/flash-card/flash-card.html"*/'<div class="flip-container" (click)="flip()" [class.flipped]="flipped">\n \n    <div class="flipper">\n \n        <div class="front">\n            <ng-content select=".flash-card-front"></ng-content>\n        </div>\n \n        <div class="back">\n            <ng-content select=".flash-card-back"></ng-content>\n        </div>\n \n    </div>\n \n</div>'/*ion-inline-end:"/home/mifune/ionic-apps/ionic-apps/tutorial/svi001/app3/burmese-vocabulary/src/components/flash-card/flash-card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FlashCardComponent);
    return FlashCardComponent;
}());

//# sourceMappingURL=flash-card.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map