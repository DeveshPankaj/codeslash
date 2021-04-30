(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  position: absolute;\n  top: 60px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-sidenav {\n  /*width: 250px;*/\n  min-width: 300px;\n  max-width: 1024px;\n  padding:15px;\n\n}\n\n.grabber{\n   content: '';\n   position: absolute;\n   top: 0;\n   left: 0;\n   margin-right: -15px;\n   cursor: ew-resize;\n   height: 100%;\n   width: 10px;\n   /*border-top: 1px solid #444;*/\n   overflow: hidden;\n}\n\n/* THEME */\n\n/* console */\n\n.example-sidenav {\n  /*background-color: #444;*/\n}\n\n/*console grabber*/\n\n.grabber {\n  /*background-color: #444;*/\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztDQUNWOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTs7Q0FFZDs7QUFFRDtHQUNHLFlBQVk7R0FDWixtQkFBbUI7R0FDbkIsT0FBTztHQUNQLFFBQVE7R0FDUixvQkFBb0I7R0FDcEIsa0JBQWtCO0dBQ2xCLGFBQWE7R0FDYixZQUFZO0dBQ1osK0JBQStCO0dBQy9CLGlCQUFpQjtDQUNuQjs7QUFNRCxXQUFXOztBQUNYLGFBQWE7O0FBQ2I7RUFDRSwyQkFBMkI7Q0FDNUI7O0FBR0QsbUJBQW1COztBQUNuQjtFQUNFLDJCQUEyQjtDQUM1QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYwcHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5leGFtcGxlLXNpZGVuYXYge1xuICAvKndpZHRoOiAyNTBweDsqL1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgcGFkZGluZzoxNXB4O1xuXG59XG5cbi5ncmFiYmVye1xuICAgY29udGVudDogJyc7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICB0b3A6IDA7XG4gICBsZWZ0OiAwO1xuICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgIGN1cnNvcjogZXctcmVzaXplO1xuICAgaGVpZ2h0OiAxMDAlO1xuICAgd2lkdGg6IDEwcHg7XG4gICAvKmJvcmRlci10b3A6IDFweCBzb2xpZCAjNDQ0OyovXG4gICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5cblxuXG5cbi8qIFRIRU1FICovXG4vKiBjb25zb2xlICovXG4uZXhhbXBsZS1zaWRlbmF2IHtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0OyovXG59XG5cblxuLypjb25zb2xlIGdyYWJiZXIqL1xuLmdyYWJiZXIge1xuICAvKmJhY2tncm91bmQtY29sb3I6ICM0NDQ7Ki9cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header\n  (openSideConsole)=\"openSideConsole()\"\n  (runStop)=\"runStopProgram($event)\"\n  [running]=\"running\"\n  (openFolder)=\"openFolder($event)\"\n  [_isSettingsOpen]=\"isSettingsOpen\"\n  (openFile)=\"openFile($event)\"\n  (openConsole)=\"sideConsoleState=!sideConsoleState\"\n  [isConsoleOpen]=\"sideConsoleState\"\n  (closeLeft)=\"isSettingsOpen=false\"\n  (openLeft)=\"isSettingsOpen=true\"\n  (newFile)=\"newFile()\"\n></app-header>\n\n\n<mat-drawer-container class=\"example-container\" autosize>\n  <mat-drawer #settings class=\"example-sidenav\" mode=\"side\" [opened]=\"isSettingsOpen\">\n    <!--<p>Auto-resizing sidenav</p>-->\n    <!--<p *ngIf=\"fullSettings\">Lorem, ipsum dolor sit amet consectetur.</p>-->\n    <!--<button (click)=\"fullSettings=!fullSettings\" mat-raised-button>-->\n      <!--Toggle extra text-->\n    <!--</button>-->\n    <app-tree *ngIf=\"showTree\" [root]=\"root\" (openFile)=\"openFile($event)\"></app-tree>\n  </mat-drawer>\n\n  <mat-drawer #console class=\"example-sidenav\" [style.width.px]='width' position=\"end\" mode=\"side\" [opened]=\"sideConsoleState\">\n    <app-terminal [data]=\"consoleData\"></app-terminal>\n    <div class=\"grabber\"></div>\n  </mat-drawer>\n\n  <div class=\"example-sidenav-content\">\n    <!--<app-tabs1 [openFiles]=\"openFiles\" (closeFile)=\"closeFile($event)\"></app-tabs1>-->\n\n\n    <!--<button type=\"button\" mat-button (click)=\"settings.toggle()\">-->\n      <!--Toggle sidenav-->\n    <!--</button>-->\n    <!--<button type=\"button\" mat-button (click)=\"console.toggle()\">-->\n      <!--Toggle sidenav-->\n    <!--</button>-->\n\n    <app-tabs (currentTab)=\"currentTab($event)\" [changeSelectedTab]=\"selectedTab\" (closeTab)=\"removeTab($event)\" [tabs]=\"tabs\"></app-tabs>\n\n\n    <!--<app-my-tabs></app-my-tabs>-->\n\n    <!--<ng-template let-code=\"person\" #personEdit>-->\n    <!--&lt;!&ndash;<h1>Code</h1>&ndash;&gt;-->\n      <!--<app-code></app-code>-->\n    <!--</ng-template>-->\n\n    <!--<button class=\"btn btn-default\" (click)=\"onAddPerson()\">Add new person</button>-->\n\n\n  </div>\n</mat-drawer-container>\n\n\n\n\n\n<!--<app-tabs1></app-tabs1>-->\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/ngx-device-detector.umd.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");
/* harmony import */ var _tree_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tree/tree.component */ "./src/app/tree/tree.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");






var path = __webpack_require__(/*! path */ "./node_modules/path/path.js");
var File = /** @class */ (function () {
    function File(name, pth) {
        this.name = name;
        this.path = pth;
        this.running = false;
        this.onTop = false;
    }
    return File;
}());
var files = [{ name: 'Untitled', path: '/home', running: false, onTop: true }];
var AppComponent = /** @class */ (function () {
    function AppComponent(_data, resolver, deviceService, _electronService) {
        this._data = _data;
        this.resolver = resolver;
        this.deviceService = deviceService;
        this._electronService = _electronService;
        this.sideConsoleState = false;
        this.running = false;
        this.consoleData = 'output:\n';
        this.title = 'untitled';
        this.isSettingsOpen = false;
        this.isConsoleOpen = true;
        this.fullSettings = false;
        this.showTree = true;
        this.tabs = [
        // new File('CAPTBIRD.cpp', '/home/devesh/Desktop/CodeChef')
        ];
        this.root = '/';
        this.selectedTab = 0;
        /// console
        this.width = 400;
        this.x = 100;
        this.oldX = 0;
        this.grabber = false;
        this.dynamicSettings = this._electronService.ipcRenderer.sendSync('getSettings', {});
        this.tabs = this.dynamicSettings.openTabs;
        if (this.tabs.length === 0) {
            this.tabs.push(new File('untitled', undefined));
        }
        this.root = this.dynamicSettings.openFolder;
        // console.log(this.dynamicSettings);
        this._electronService.ipcRenderer.on('ping', function (event, data) {
            console.log('ping', data);
        });
    }
    AppComponent.prototype.openSideConsole = function () {
        this.sideConsoleState = !this.sideConsoleState;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._data.currentMessage.subscribe(function (d) { return _this.globalData = d; });
        this.treeRef = this.resolver.resolveComponentFactory(_tree_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeComponent"]);
        this._electronService.ipcRenderer.on('openConsole', function (event, data) {
            _this.sideConsoleState = true;
            console.log('openConsole');
        });
        this._electronService.ipcRenderer.on('programClosed', function (event, file) {
            console.log('programClosed', file);
            _this.running = false;
            _this.isOpen(file).then(function (index) {
                if (index !== -1) {
                    _this.tabs[index].running = false;
                }
            });
        });
    };
    AppComponent.prototype.newFile = function () {
        this.tabs.push(new File('untitled', undefined));
        this.selectedTab = this.tabs.length - 1;
    };
    AppComponent.prototype.openFolder = function () {
        // this.isSettingsOpen = !this.isSettingsOpen;
        this.isSettingsOpen = true;
        var dir = this._electronService.ipcRenderer.sendSync('openFolder', {});
        if (dir) {
            this.root = dir;
        }
        // console.log(dir);
    };
    AppComponent.prototype.openFile = function (f) {
        var _this = this;
        f = { name: f.item, path: f.dir };
        console.log('open file', f);
        this.isOpen(f).then(function (index) {
            if (index === -1) {
                _this.tabs.push(new File(f.name, f.path));
                _this._electronService.ipcRenderer.send('save-open-tabs', _this.tabs);
                _this.selectedTab = _this.tabs.length - 1;
            }
            else {
                _this.selectedTab = index;
            }
        });
    };
    AppComponent.prototype.isOpen = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var found = false;
            for (var i = 0; i < _this.tabs.length; i++) {
                if (_this.tabs[i].name === file.name && _this.tabs[i].path === file.path) {
                    resolve(i);
                    found = true;
                    break;
                }
                if (i === _this.tabs.length - 1) {
                    if (found === false) {
                        resolve(-1);
                    }
                }
            }
        });
    };
    // openFileCommand(f) {
    //   f = {name: f.item, path: f.dir, size: 0};
    //   console.log('from app', f);
    // }
    AppComponent.prototype.removeTab = function (index) {
        // console.log('closing', this.tabs[index]);
        this.tabs.splice(index, 1);
        this._electronService.ipcRenderer.send('save-open-tabs', this.tabs);
        if (this.tabs.length === 0) {
            this.tabs.push(new File('untitled', undefined));
        }
    };
    AppComponent.prototype.onMouseMove = function (event) {
        if (!this.grabber) {
            return;
        }
        this.resizer(event.clientX - this.oldX);
        this.oldX = event.clientX;
    };
    AppComponent.prototype.onMouseUp = function (event) {
        this.grabber = false;
    };
    AppComponent.prototype.resizer = function (offsetX) {
        this.width -= offsetX;
    };
    AppComponent.prototype.onMouseDown = function (event) {
        this.grabber = true;
        this.oldX = event.clientX;
    };
    AppComponent.prototype.currentTab = function (index) {
        this.selectedTab = index;
    };
    AppComponent.prototype.runStopProgram = function (rs) {
        console.log('run/stop', rs);
        var fp = {
            name: this.tabs[this.selectedTab].name,
            path: this.tabs[this.selectedTab].path
        };
        if (fp.path) {
            if (rs === true) {
                this.tabs[this.selectedTab].running = true;
                this.running = true;
                this._electronService.ipcRenderer.send('runProgram', fp);
            }
            else {
                this.tabs[this.selectedTab].running = false;
                this.running = false;
                this._electronService.ipcRenderer.send('stopProgram', fp);
            }
        }
        else {
            alert('save the file first');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('personEdit'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "editPersonTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('settings', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "container", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mousemove', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "onMouseMove", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mouseup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "onMouseUp", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:mousedown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "onMouseDown", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__["DeviceDetectorService"], ngx_electron__WEBPACK_IMPORTED_MODULE_3__["ElectronService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app.material.module.ts ***!
  \****************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.material.module */ "./src/app/app.material.module.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/ngx-device-detector.umd.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _tree_tree_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tree/tree.component */ "./src/app/tree/tree.component.ts");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");
/* harmony import */ var _code_code_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./code/code.component */ "./src/app/code/code.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ "./node_modules/@ctrl/ngx-codemirror/fesm5/ctrl-ngx-codemirror.js");
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! codemirror/mode/javascript/javascript */ "./node_modules/codemirror/mode/javascript/javascript.js");
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! codemirror/mode/markdown/markdown */ "./node_modules/codemirror/mode/markdown/markdown.js");
/* harmony import */ var codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! codemirror/mode/python/python */ "./node_modules/codemirror/mode/python/python.js");
/* harmony import */ var codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var codemirror_mode_css_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! codemirror/mode/css/css */ "./node_modules/codemirror/mode/css/css.js");
/* harmony import */ var codemirror_mode_css_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_css_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var codemirror_mode_clike_clike__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! codemirror/mode/clike/clike */ "./node_modules/codemirror/mode/clike/clike.js");
/* harmony import */ var codemirror_mode_clike_clike__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_clike_clike__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var codemirror_mode_htmlembedded_htmlembedded__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! codemirror/mode/htmlembedded/htmlembedded */ "./node_modules/codemirror/mode/htmlembedded/htmlembedded.js");
/* harmony import */ var codemirror_mode_htmlembedded_htmlembedded__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_htmlembedded_htmlembedded__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/tabs/tabs.component.ts");
/* harmony import */ var _terminal_terminal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./terminal/terminal.component */ "./src/app/terminal/terminal.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _tree_tree_component__WEBPACK_IMPORTED_MODULE_9__["TreeComponent"],
                _code_code_component__WEBPACK_IMPORTED_MODULE_11__["CodeComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_21__["TabsComponent"],
                _terminal_terminal_component__WEBPACK_IMPORTED_MODULE_22__["TerminalComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"],
                _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_13__["CodemirrorModule"],
                ngx_electron__WEBPACK_IMPORTED_MODULE_10__["NgxElectronModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__["DeviceDetectorModule"].forRoot()
            ],
            entryComponents: [
                _code_code_component__WEBPACK_IMPORTED_MODULE_11__["CodeComponent"],
                _tree_tree_component__WEBPACK_IMPORTED_MODULE_9__["TreeComponent"]
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_23__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/code/code.component.css":
/*!*****************************************!*\
  !*** ./src/app/code/code.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvZGUvY29kZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/code/code.component.html":
/*!******************************************!*\
  !*** ./src/app/code/code.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-codemirror\n  #ref\n  [options]=\"options\"\n  [ngModel]=\"file.data\"\n  [disabled]=\"readOnly\"\n  [autoFocus]=\"true\"\n  (ngModelChange)=\"handleChange($event)\"\n  (focusChange)=\"focusChange($event)\"\n  (scroll)=\"scroll($event)\"\n  (cursorActivity)=\"cursorActivity($event)\"\n  [ngStyle]=\"{'font-size':fontSize+'px'}\"\n>\n</ngx-codemirror>\n\n"

/***/ }),

/***/ "./src/app/code/code.component.ts":
/*!****************************************!*\
  !*** ./src/app/code/code.component.ts ***!
  \****************************************/
/*! exports provided: CodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeComponent", function() { return CodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");



var path = __webpack_require__(/*! path */ "./node_modules/path/path.js");
// import {KeyboardShortcutsService} from 'ng-keyboard-shortcuts';
// import {CodemirrorService} from '@nomadreservations/ngx-codemirror';
// import {stringify} from 'querystring';
// const defaults = {
//     markdown:
//         '# Heading\n\nSome **bold** and _italic_ text\nBy [Scott Cooper](https://github.com/scttcper)',
//     'text/typescript':
//         `const component = {
//   name: "@ctrl/ngx-codemirror",
//   author: "Scott Cooper",
//   repo: "https://github.com/typectrl/ngx-codemirror"
// };
// const hello: string = 'world';`,
//     python: '\n\nprint(something)\n\n',
//     htmlembedded: '<html></html>'
// };
var modeMap = {
    '.js': 'text/typescript',
    '.ts': 'text/typescript',
    '.html': 'htmlembedded',
    '.py': 'python',
    '.c': 'clike',
    '.cpp': 'clike',
    '.md': 'markdown'
};
var File = /** @class */ (function () {
    function File(name, path, size) {
        this.name = name;
        this.path = path;
        this.size = size;
    }
    return File;
}());
var CodeComponent = /** @class */ (function () {
    function CodeComponent(_electronService) {
        this._electronService = _electronService;
        this.readOnly = false;
        this.fontSize = 20;
        this.mode = 'text/typescript';
        this.data = '\n\n\n\n\n\n\n\n\n\n';
        this.options = {
            lineNumbers: true,
            lineWrapping: true,
            styleActiveLine: true,
            autoFocus: true,
            mode: this.mode,
            smartIndent: true,
            firstLineNumber: 1,
            theme: 'mdn-like'
            // theme: 'darcula'
        };
    }
    Object.defineProperty(CodeComponent.prototype, "_file", {
        set: function (file) {
            this.file = file;
            this.mode = modeMap[path.parse(file.name).ext];
        },
        enumerable: true,
        configurable: true
    });
    CodeComponent.prototype.changeMode = function () {
        this.options = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.options, { mode: this.mode });
    };
    CodeComponent.prototype.handleChange = function ($event) {
        this.file.data = $event;
        // console.log($event);
        // console.log('ngModelChange', $event);
    };
    CodeComponent.prototype.focusChange = function ($event) {
        // console.log($event ? 'focus In' : 'focus Out');
    };
    CodeComponent.prototype.scroll = function ($event) {
        // console.log('scrol', $event);
    };
    CodeComponent.prototype.cursorActivity = function ($event) {
        // console.log($event);
    };
    CodeComponent.prototype.ngOnInit = function () {
        console.log('code init', this.file);
        this.mode = modeMap[path.parse(this.file.name).ext];
        if (this.file.path) {
            var data = this._electronService.ipcRenderer.sendSync('getFile', this.file);
            if (!data.error) {
                this.file.data = data.data;
            }
        }
        else {
            this.file.data = '\n\n\n\n\n\n\n\n\n';
        }
        // this._electronService.ipcRenderer.on('save', (event, signal) => {
        // console.log('save', signal);
        // this._electronService.ipcRenderer.send('saveFile', this.file.data, this.file);
        // });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ref'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CodeComponent.prototype, "ref", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", File)
    ], CodeComponent.prototype, "file", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], CodeComponent.prototype, "_file", null);
    CodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-code',
            template: __webpack_require__(/*! ./code.component.html */ "./src/app/code/code.component.html"),
            styles: [__webpack_require__(/*! ./code.component.css */ "./src/app/code/code.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_electron__WEBPACK_IMPORTED_MODULE_2__["ElectronService"]])
    ], CodeComponent);
    return CodeComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DataService = /** @class */ (function () {
    function DataService() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.currentMessage = this.messageSource.asObservable();
    }
    DataService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n  padding: 0 2px;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n\n.close-btn {\n  cursor: pointer;\n}\n\n.close-btn:hover {\n  color: #ff4050;\n}\n\n.minimize-btn {\n  cursor: pointer;\n  color: gold;\n}\n\n.maximize-btn {\n  cursor: pointer;\n}\n\n.drag {\n  -webkit-user-select: none;\n  -webkit-app-region: drag;\n}\n\n.no-drag {\n  -webkit-app-region: no-drag;\n}\n\n.play-btn {\n  cursor: -webkit-grab;\n  cursor: grab;\n  color: green;\n}\n\n.play-btn:hover {\n  color: greenyellow;\n}\n\n.stop-btn {\n  color: red;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n/* slide */\n\n.example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 10px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjs7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQix5QkFBeUI7Q0FDMUI7O0FBQ0Q7RUFDRSw0QkFBNEI7Q0FDN0I7O0FBRUQ7RUFDRSxxQkFBYTtFQUFiLGFBQWE7RUFDYixhQUFhO0NBQ2Q7O0FBR0Q7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gscUJBQWE7RUFBYixhQUFhO0NBQ2Q7O0FBTUQsV0FBVzs7QUFDWDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWljb24ge1xuICBwYWRkaW5nOiAwIDJweDtcbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5jbG9zZS1idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2xvc2UtYnRuOmhvdmVyIHtcbiAgY29sb3I6ICNmZjQwNTA7XG59XG5cbi5taW5pbWl6ZS1idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBnb2xkO1xufVxuLm1heGltaXplLWJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRyYWcge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LWFwcC1yZWdpb246IGRyYWc7XG59XG4ubm8tZHJhZyB7XG4gIC13ZWJraXQtYXBwLXJlZ2lvbjogbm8tZHJhZztcbn1cblxuLnBsYXktYnRuIHtcbiAgY3Vyc29yOiBncmFiO1xuICBjb2xvcjogZ3JlZW47XG59XG5cblxuLnBsYXktYnRuOmhvdmVyIHtcbiAgY29sb3I6IGdyZWVueWVsbG93O1xufVxuXG4uc3RvcC1idG4ge1xuICBjb2xvcjogcmVkO1xuICBjdXJzb3I6IGdyYWI7XG59XG5cblxuXG5cblxuLyogc2xpZGUgKi9cbi5leGFtcGxlLWgyIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZXhhbXBsZS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5leGFtcGxlLW1hcmdpbiB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"drag theme\">\n  <mat-toolbar-row class=\"theme\">\n    <!--<span>Third Line</span>-->\n\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"no-drag\">\n      <mat-icon>apps</mat-icon>\n    </button>\n    <mat-menu #menu=\"matMenu\">\n\n      <button mat-menu-item (click)=\"newFile.emit(true)\">\n        <mat-icon>add</mat-icon>\n        <span>New File</span>\n      </button>\n\n      <button mat-menu-item (click)=\"_openFile()\">\n        <mat-icon>insert_drive_file</mat-icon>\n        <span>Open file</span>\n      </button>\n\n      <button mat-menu-item (click)=\"openFolderDialog()\">\n        <mat-icon>folder</mat-icon>\n        <span>Open folder</span>\n      </button>\n\n\n      <!--<button mat-menu-item>-->\n      <!--<mat-icon>folder</mat-icon>-->\n      <!--<span>Open folder</span>-->\n      <!--</button>-->\n      <!--<button mat-menu-item disabled>-->\n      <!--<mat-icon>voicemail</mat-icon>-->\n      <!--<span>Check voicemail</span>-->\n      <!--</button>-->\n\n\n      <button *ngIf=\"isSettingsOpen\" mat-menu-item (click)=\"closeLeft.emit(true)\">\n        <mat-icon>close</mat-icon>\n        <span>Close project</span>\n      </button>\n      <button *ngIf=\"!isSettingsOpen\" mat-menu-item (click)=\"openLeft.emit(true)\">\n        <mat-icon>close</mat-icon>\n        <span>Open project</span>\n      </button>\n\n    </mat-menu>\n\n\n    <span class=\"example-spacer\"></span>\n\n    <button *ngIf=\"!running\" mat-icon-button (click)=\"runProgram()\" class=\"no-drag play-btn\" [matTooltip]=\"'run'\">\n      <mat-icon aria-label=\"run program\">play_arrow</mat-icon>\n    </button>\n\n    <button *ngIf=\"running\" mat-icon-button (click)=\"stopProgram()\" class=\"no-drag stop-btn\" [matTooltip]=\"'stop'\">\n      <mat-icon aria-label=\"run program\">stop</mat-icon>\n    </button>\n\n\n    <section class=\"example-section\">\n      <mat-slide-toggle\n        class=\"example-margin no-drag\"\n        [matTooltip]=\"(isConsoleOpen?'Close':'Open')+' console'\"\n        [matTooltipDisabled]=\"tooltip.openConsole.disabled\"\n        [color]=\"'accent'\"\n        [checked]=\"isConsoleOpen\"\n        (change)=\"openSideConsole.emit(true)\"\n      >\n      </mat-slide-toggle>\n    </section>\n\n\n    <mat-icon class=\"example-icon minimize-btn no-drag\"\n              [matTooltip]=\"tooltip.minimizeBTN.msg\"\n              [matTooltipDisabled]=\"tooltip.minimizeBTN.disabled\"\n              (click)=\"minimizeWindow()\">brightness_1\n    </mat-icon>\n    <mat-icon class=\"example-icon maximize-btn no-drag\"\n              [matTooltip]=\"tooltip.maximizeBTN.msg\"\n              [matTooltipDisabled]=\"tooltip.maximizeBTN.disabled\"\n              (click)=\"maximizeWindow()\"\n    >brightness_1\n    </mat-icon>\n\n    <mat-icon class=\"example-icon close-btn no-drag\"\n              [matTooltip]=\"tooltip.closeBTN.msg\"\n              [matTooltipDisabled]=\"tooltip.closeBTN.disabled\"\n              (click)=\"closeWindow()\">loupe\n    </mat-icon>\n  </mat-toolbar-row>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_data, _electronService) {
        this._data = _data;
        this._electronService = _electronService;
        this.isFullScreen = true;
        this.tooltip = {
            openConsole: { msg: 'Open/Close Console', disabled: false },
            runBTN: { msg: 'run', disabled: false },
            closeBTN: { msg: 'close', disabled: false },
            minimizeBTN: { msg: 'minimize', disabled: false },
            maximizeBTN: { msg: 'maximize', disabled: false }
        };
        // Events
        this.openSideConsole = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openFolder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openFile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closeLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.runStop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newFile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(HeaderComponent.prototype, "_isSettingsOpen", {
        set: function (state) {
            console.log(state);
            this.isSettingsOpen = state;
        },
        enumerable: true,
        configurable: true
    });
    // Functions
    HeaderComponent.prototype.closeWindow = function () {
        this._electronService.remote.getCurrentWindow().close();
    };
    HeaderComponent.prototype.maximizeWindow = function () {
        this._electronService.remote.getCurrentWindow().maximize();
    };
    HeaderComponent.prototype.minimizeWindow = function () {
        this._electronService.remote.getCurrentWindow().minimize();
    };
    HeaderComponent.prototype.runProgram = function () {
        // this.running = true;
        this.runStop.emit(true);
    };
    HeaderComponent.prototype.stopProgram = function () {
        // this.running = false;
        this.runStop.emit(false);
    };
    HeaderComponent.prototype.openFolderDialog = function () {
        this.openFolder.emit(true);
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._data.currentMessage.subscribe(function (d) { return _this.globalData = d; });
    };
    HeaderComponent.prototype._openFile = function () {
        var file = this._electronService.ipcRenderer.sendSync('openFile', {});
        console.log(file);
        this.openFile.emit(file);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], HeaderComponent.prototype, "running", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "openSideConsole", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "openFolder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "openFile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "closeLeft", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "openLeft", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "runStop", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "newFile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "isConsoleOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], HeaderComponent.prototype, "_isSettingsOpen", null);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            ngx_electron__WEBPACK_IMPORTED_MODULE_2__["ElectronService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.component.css":
/*!*****************************************!*\
  !*** ./src/app/tabs/tabs.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-input-label,\n.example-add-tab-button,\n.example-delete-tab-button {\n  margin: 8px;\n}\n\n.tab-close {\n\n}\n\n.tab-close:hover {\n  color: #ff4050;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy90YWJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLFlBQVk7Q0FDYjs7QUFFRDs7Q0FFQzs7QUFDRDtFQUNFLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWlucHV0LWxhYmVsLFxuLmV4YW1wbGUtYWRkLXRhYi1idXR0b24sXG4uZXhhbXBsZS1kZWxldGUtdGFiLWJ1dHRvbiB7XG4gIG1hcmdpbjogOHB4O1xufVxuXG4udGFiLWNsb3NlIHtcblxufVxuLnRhYi1jbG9zZTpob3ZlciB7XG4gIGNvbG9yOiAjZmY0MDUwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/tabs/tabs.component.html":
/*!******************************************!*\
  !*** ./src/app/tabs/tabs.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div>-->\n<!--<span class=\"example-input-label\"> Selected tab index: </span>-->\n<!--<mat-form-field>-->\n<!--<input matInput type=\"number\" [formControl]=\"selected\">-->\n<!--</mat-form-field>-->\n<!--</div>-->\n\n<h1 *ngIf=\"tabs.length===0\">Open Any file</h1>\n\n<mat-tab-group [selectedIndex]=\"selected.value\"\n               (selectedIndexChange)=\"_changeSelectedTab($event)\"\n               animationDuration=\"0ms\"\n>\n  <mat-tab *ngFor=\"let tab of tabs; let index = index\" [label]=\"tab.name\">\n\n\n    <ng-template mat-tab-label style=\"background-color: #444;\">\n    {{tab.name}}&nbsp;&nbsp;&nbsp;\n    <mat-icon class=\"tab-close\" (click)=\"closeTab.emit(index)\" >close</mat-icon>\n    </ng-template>\n\n    <app-code [file]=\"tab\"></app-code>\n    <!--<button mat-raised-button-->\n            <!--class=\"example-delete-tab-button\"-->\n            <!--[disabled]=\"tabs.length === 1\"-->\n            <!--(click)=\"removeTab(index)\">-->\n      <!--Delete Tab-->\n    <!--</button>-->\n  </mat-tab>\n</mat-tab-group>\n\n\n<!--<div>-->\n  <!--<button mat-raised-button-->\n          <!--class=\"example-add-tab-button\"-->\n          <!--(click)=\"addTab(selectAfterAdding.checked)\">-->\n    <!--Add new tab-->\n  <!--</button>-->\n  <!--<mat-checkbox #selectAfterAdding> Select tab after adding</mat-checkbox>-->\n<!--</div>-->\n"

/***/ }),

/***/ "./src/app/tabs/tabs.component.ts":
/*!****************************************!*\
  !*** ./src/app/tabs/tabs.component.ts ***!
  \****************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");





var File = /** @class */ (function () {
    function File(name, path, size) {
        this.name = name;
        this.path = path;
        this.size = size;
    }
    return File;
}());
var TabsComponent = /** @class */ (function () {
    function TabsComponent(_data, _electronService) {
        this._data = _data;
        this._electronService = _electronService;
        this.closeTab = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentTab = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0);
        this.selectedTabIndex = 0;
    }
    Object.defineProperty(TabsComponent.prototype, "changeSelectedTab", {
        set: function (selected) {
            this.selected.setValue(selected);
        },
        enumerable: true,
        configurable: true
    });
    TabsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._data.currentMessage.subscribe(function (d) { return _this.globalData = d; });
        this._electronService.ipcRenderer.on('save', function (event, data) {
            if (_this.tabs[_this.selectedTabIndex].path) {
                _this._electronService.ipcRenderer.send('saveFile', _this.tabs[_this.selectedTabIndex]);
            }
            else {
                var file = _this._electronService.ipcRenderer.sendSync('saveNewFile', _this.tabs[_this.selectedTabIndex]);
                _this.tabs[_this.selectedTabIndex].path = file.path;
                _this.tabs[_this.selectedTabIndex].name = file.name;
                _this._electronService.ipcRenderer.send('save-open-tabs', _this.tabs);
            }
        });
    };
    TabsComponent.prototype._changeSelectedTab = function (index) {
        this.selected.setValue(index);
        this.currentTab.emit(index);
        this.selectedTabIndex = index;
        console.log('selected tab', index);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TabsComponent.prototype, "closeTab", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TabsComponent.prototype, "currentTab", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TabsComponent.prototype, "tabs", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], TabsComponent.prototype, "changeSelectedTab", null);
    TabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.css */ "./src/app/tabs/tabs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], ngx_electron__WEBPACK_IMPORTED_MODULE_4__["ElectronService"]])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/terminal/terminal.component.css":
/*!*************************************************!*\
  !*** ./src/app/terminal/terminal.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  /*max-width: 500px;*/\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 10px;\n}\n\n:root {\n  --max-input-height: 30vh;\n}\n\n.magic-input {\n  max-height: var(--max-input-height);\n  overflow: hidden auto;\n}\n\n.magic-input {\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  outline: 0;\n  /*background-color: #282e33;*/\n  padding: 15px;\n  line-height: 1.4em;\n  box-sizing: border-box;\n}\n\n.magic-input:focus {\n  /*color: #fff;*/\n}\n\n.magic-input, .magic-input:before {\n  /*color: #818991;*/\n}\n\n.magic-input:before {\n  content: attr(data-placeholder);\n}\n\n.output {\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  outline: 0;\n  /*background-color: #282e33;*/\n  padding: 15px;\n  line-height: 1.4em;\n  box-sizing: border-box;\n}\n\n/* THEME */\n\n.example-form {\n  /*background-color: #777777;*/\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybWluYWwvdGVybWluYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtDQUNkOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UseUJBQXlCO0NBQzFCOztBQUVEO0VBQ0Usb0NBQW9DO0VBQ3BDLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsUUFBUTtFQUNSLFlBQVk7RUFDWixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZ0NBQWdDO0NBQ2pDOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix1QkFBdUI7Q0FDeEI7O0FBRUQsV0FBVzs7QUFDWDtFQUNFLDhCQUE4QjtDQUMvQiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1pbmFsL3Rlcm1pbmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgLyptYXgtd2lkdGg6IDUwMHB4OyovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWgyIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZXhhbXBsZS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5leGFtcGxlLW1hcmdpbiB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuOnJvb3Qge1xuICAtLW1heC1pbnB1dC1oZWlnaHQ6IDMwdmg7XG59XG5cbi5tYWdpYy1pbnB1dCB7XG4gIG1heC1oZWlnaHQ6IHZhcigtLW1heC1pbnB1dC1oZWlnaHQpO1xuICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XG59XG5cbi5tYWdpYy1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogMDtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyZTMzOyovXG4gIHBhZGRpbmc6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm1hZ2ljLWlucHV0OmZvY3VzIHtcbiAgLypjb2xvcjogI2ZmZjsqL1xufVxuXG4ubWFnaWMtaW5wdXQsIC5tYWdpYy1pbnB1dDpiZWZvcmUge1xuICAvKmNvbG9yOiAjODE4OTkxOyovXG59XG5cbi5tYWdpYy1pbnB1dDpiZWZvcmUge1xuICBjb250ZW50OiBhdHRyKGRhdGEtcGxhY2Vob2xkZXIpO1xufVxuXG4ub3V0cHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiAwO1xuICAvKmJhY2tncm91bmQtY29sb3I6ICMyODJlMzM7Ki9cbiAgcGFkZGluZzogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBUSEVNRSAqL1xuLmV4YW1wbGUtZm9ybSB7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogIzc3Nzc3NzsqL1xufVxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/terminal/terminal.component.html":
/*!**************************************************!*\
  !*** ./src/app/terminal/terminal.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"example-section\">\n<mat-checkbox class=\"example-margin\" [(ngModel)]=\"isInputOpen\">Feed input</mat-checkbox>\n</section>\n\n<!--<form class=\"example-form\" *ngIf=\"isInputOpen\">-->\n<!--<mat-form-field class=\"example-full-width\">-->\n<!--<textarea matInput placeholder=\"Code input\"></textarea>-->\n<!--</mat-form-field>-->\n<!--</form>-->\n\n<textarea *ngIf=\"isInputOpen\" [(ngModel)]=\"feedData\" style=\"border-style: none; width: calc(100% - 10px);height: 200px\" placeholder=\"feed input\"></textarea>\n\n<input class=\"magic-input\" tab-index=\"1\" (change)=\"updateInput()\" [(ngModel)]=\"command\" style=\"border-style: none\"\n       placeholder=\"input...\">\n\n\n<mat-divider></mat-divider>\n\n\n<div class=\"output\">\n  <pre>{{data}}</pre>\n</div>\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/terminal/terminal.component.ts":
/*!************************************************!*\
  !*** ./src/app/terminal/terminal.component.ts ***!
  \************************************************/
/*! exports provided: TerminalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalComponent", function() { return TerminalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");



var TerminalComponent = /** @class */ (function () {
    function TerminalComponent(_electronService) {
        var _this = this;
        this._electronService = _electronService;
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.isInputOpen = false;
        this.command = '';
        this.feedData = '';
        this._electronService.ipcRenderer.on('console-data', function (event, data) {
            console.log('console data', data);
            _this.data += data + '\n';
        });
    }
    TerminalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._electronService.ipcRenderer.on('consoleData', function (event, data, flush) {
            if (flush === true) {
                _this.data = 'output:\n';
            }
            _this.data += "" + data;
            console.log('consoleData', "" + data);
        });
        this._electronService.ipcRenderer.on('consoleError', function (event, data, flush) {
            if (flush) {
                _this.data = data;
            }
            else {
                _this.data += data;
            }
        });
        this._electronService.ipcRenderer.on('getDataFeed', function (event, data) {
            if (_this.isInputOpen) {
                _this._electronService.ipcRenderer.send('sendDataToProcess', _this.feedData);
            }
        });
    };
    TerminalComponent.prototype.updateInput = function () {
        console.log(this.command);
        this.data += this.command + '\n';
        this._electronService.ipcRenderer.send('sendDataToProcess', this.command);
        this.command = '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TerminalComponent.prototype, "data", void 0);
    TerminalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-terminal',
            template: __webpack_require__(/*! ./terminal.component.html */ "./src/app/terminal/terminal.component.html"),
            styles: [__webpack_require__(/*! ./terminal.component.css */ "./src/app/terminal/terminal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_electron__WEBPACK_IMPORTED_MODULE_2__["ElectronService"]])
    ], TerminalComponent);
    return TerminalComponent;
}());



/***/ }),

/***/ "./src/app/tree/tree.component.css":
/*!*****************************************!*\
  !*** ./src/app/tree/tree.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.example-tree-progress-bar {*/\n/*margin-left: 30px;*/\n/*}*/\n.file {\n  color: darkgrey;\n  cursor: pointer;\n}\n.file:hover {\n  color: green;\n}\n.tree {\n  /*background-color: #444;*/\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlZS90cmVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDLHNCQUFzQjtBQUN0QixLQUFLO0FBRUw7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0NBQ2pCO0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7QUFFRDtFQUNFLDJCQUEyQjtDQUM1QiIsImZpbGUiOiJzcmMvYXBwL3RyZWUvdHJlZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyouZXhhbXBsZS10cmVlLXByb2dyZXNzLWJhciB7Ki9cbi8qbWFyZ2luLWxlZnQ6IDMwcHg7Ki9cbi8qfSovXG5cbi5maWxlIHtcbiAgY29sb3I6IGRhcmtncmV5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maWxlOmhvdmVyIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4udHJlZSB7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogIzQ0NDsqL1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/tree/tree.component.html":
/*!******************************************!*\
  !*** ./src/app/tree/tree.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"tree\">\n\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding class=\"file\" (click)=\"openFile.emit(node)\">\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n    <!--<mat-progress-bar *ngIf=\"node.isLoading\" mode=\"indeterminate\" class=\"example-tree-progress-bar\"></mat-progress-bar>-->\n  </mat-tree-node>\n</mat-tree>\n"

/***/ }),

/***/ "./src/app/tree/tree.component.ts":
/*!****************************************!*\
  !*** ./src/app/tree/tree.component.ts ***!
  \****************************************/
/*! exports provided: DynamicFlatNode, DynamicDatabase, DynamicDataSource, TreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFlatNode", function() { return DynamicFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDatabase", function() { return DynamicDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDataSource", function() { return DynamicDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return TreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_electron__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-electron */ "./node_modules/ngx-electron/fesm5/ngx-electron.js");






var path = __webpack_require__(/*! path */ "./node_modules/path/path.js");
/** Flat node with expandable and level information */
var DynamicFlatNode = /** @class */ (function () {
    function DynamicFlatNode(item, dir, level, expandable, isLoading) {
        if (level === void 0) { level = 1; }
        if (expandable === void 0) { expandable = false; }
        if (isLoading === void 0) { isLoading = false; }
        this.item = item;
        this.dir = dir;
        this.level = level;
        this.expandable = expandable;
        this.isLoading = isLoading;
    }
    return DynamicFlatNode;
}());

/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
var DynamicDatabase = /** @class */ (function () {
    function DynamicDatabase() {
        this.dataMap = new Map([
            ['Fruits', ['Apple', 'Orange', 'Banana']],
            ['Vegetables', ['Tomato', 'Potato', 'Onion']],
            ['Apple', ['Fuji', 'Macintosh']],
            ['Onion', ['Yellow', 'White', 'Purple']]
        ]);
        this.rootLevelNodes = ['Fruits', 'Vegetables'];
    }
    /** Initial data from database */
    DynamicDatabase.prototype.initialData = function (root) {
        var _this = this;
        this.root = root;
        console.log(root);
        var ls = this.ipc.ipcRenderer.sendSync('getDir', this.root);
        // return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
        return ls.map(function (node) { return new DynamicFlatNode(node.name, _this.root, 0, node.type === 'folder'); });
    };
    DynamicDatabase.prototype.getChildren = function (node) {
        var ls = this.ipc.ipcRenderer.sendSync('getDir', path.join(node.dir, node.item));
        // console.log(ls);
        return ls;
        // return this.dataMap.get(ls);
    };
    DynamicDatabase.prototype.isExpandable = function (node) {
        return node.type === 'folder';
        // return this.dataMap.has(node);
    };
    DynamicDatabase.prototype.setIPC = function (ipc) {
        this.ipc = ipc;
    };
    return DynamicDatabase;
}());

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var DynamicDataSource = /** @class */ (function () {
    function DynamicDataSource(treeControl, database, _electronService) {
        this.treeControl = treeControl;
        this.database = database;
        this._electronService = _electronService;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.delay = 0;
        this.database.setIPC(this._electronService);
    }
    Object.defineProperty(DynamicDataSource.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        set: function (value) {
            this.treeControl.dataNodes = value;
            this.dataChange.next(value);
        },
        enumerable: true,
        configurable: true
    });
    DynamicDataSource.prototype.connect = function (collectionViewer) {
        var _this = this;
        this.treeControl.expansionModel.onChange.subscribe(function (change) {
            if (change.added ||
                change.removed) {
                _this.handleTreeControl(change);
            }
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(collectionViewer.viewChange, this.dataChange).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return _this.data; }));
    };
    /** Handle expand/collapse behaviors */
    DynamicDataSource.prototype.handleTreeControl = function (change) {
        var _this = this;
        if (change.added) {
            change.added.forEach(function (node) { return _this.toggleNode(node, true); });
        }
        if (change.removed) {
            change.removed.slice().reverse().forEach(function (node) { return _this.toggleNode(node, false); });
        }
    };
    /**
     * Toggle the node, remove from display list
     */
    DynamicDataSource.prototype.toggleNode = function (node, expand) {
        var _this = this;
        var children = this.database.getChildren(node);
        var index = this.data.indexOf(node);
        if (!children || index < 0) { // If no children, or cannot find the node, no op
            return;
        }
        node.isLoading = true;
        setTimeout(function () {
            var _a;
            if (expand) {
                var nodes = children.map(function (name) {
                    return new DynamicFlatNode(name.name, path.join(node.dir, node.item), node.level + 1, _this.database.isExpandable(name));
                });
                (_a = _this.data).splice.apply(_a, [index + 1, 0].concat(nodes));
            }
            else {
                var count = 0;
                for (var i = index + 1; i < _this.data.length
                    && _this.data[i].level > node.level; i++, count++) {
                }
                _this.data.splice(index + 1, count);
            }
            // notify the change
            _this.dataChange.next(_this.data);
            node.isLoading = false;
        }, this.delay);
    };
    DynamicDataSource = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"],
            DynamicDatabase,
            ngx_electron__WEBPACK_IMPORTED_MODULE_5__["ElectronService"]])
    ], DynamicDataSource);
    return DynamicDataSource;
}());

/**
 * @title Tree with dynamic data
 */
var TreeComponent = /** @class */ (function () {
    function TreeComponent(database, _electronService) {
        this._electronService = _electronService;
        this.isOpen = false;
        // _root = '/home/devesh/Desktop/untitled';
        this._root = '/';
        this.openFile = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.database = database;
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database, this._electronService);
        // this.dataSource.data = database.initialData(this.root);
        try {
            this._electronService.ipcRenderer.send('ping', 'ping');
        }
        catch (e) {
            console.warn('ElectronService can not work in browser');
        }
    }
    Object.defineProperty(TreeComponent.prototype, "root", {
        set: function (dir) {
            this._root = dir;
            if (!this.isOpen) {
                this.dataSource.data = this.database.initialData(this._root);
            }
            console.log(dir);
        },
        enumerable: true,
        configurable: true
    });
    TreeComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], TreeComponent.prototype, "root", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TreeComponent.prototype, "openFile", void 0);
    TreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-tree',
            template: __webpack_require__(/*! ./tree.component.html */ "./src/app/tree/tree.component.html"),
            styles: [__webpack_require__(/*! ./tree.component.css */ "./src/app/tree/tree.component.css")],
            providers: [DynamicDatabase]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [DynamicDatabase, ngx_electron__WEBPACK_IMPORTED_MODULE_5__["ElectronService"]])
    ], TreeComponent);
    return TreeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment.prod */ "./src/environments/environment.prod.ts");





if (_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Downloads\codeslash-master\codeslash-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map