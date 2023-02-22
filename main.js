"use strict";
(self["webpackChunkMadeleineSaxer"] = self["webpackChunkMadeleineSaxer"] || []).push([["main"],{

/***/ 6698:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/helper.service */ 3974);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);






function AboutComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const info_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](info_r2);
  }
}
function AboutComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AboutComponent_div_0_div_8_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.me.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/image/me/", ctx_r0.me.picture, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.me.text);
  }
}
let AboutComponent = /*#__PURE__*/(() => {
  class AboutComponent {
    constructor(helper) {
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "helper", void 0);
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "me", void 0);
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "alive", void 0);
      this.helper = helper;
      this.alive = true;
      this.helper.getAboutMe().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeWhile)(() => this.alive)).subscribe(data => this.me = data);
    }
    ngOnInit() {
      this.helper.loadLanguage();
    }
    ngOnDestroy() {
      this.alive = false;
    }
  }
  (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AboutComponent, "\u0275fac", function AboutComponent_Factory(t) {
    return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_helper_service__WEBPACK_IMPORTED_MODULE_1__.HelperService));
  });
  (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AboutComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 1,
    vars: 1,
    consts: [["class", "about-container", 4, "ngIf"], [1, "about-container"], ["fxLayout", "column"], ["fxLayout", "row", "fxLayout.xs", "row wrap", "fxLayoutGap", "32px"], ["fxFlex", "200px", 1, "about-picture"], [1, "picture", 3, "src"], ["fxLayout", "column wrap", "class", "text", 4, "ngFor", "ngForOf"], ["fxLayout", "column wrap", 1, "text"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AboutComponent_div_0_Template, 9, 3, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.me);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.LayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.LayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.FlexDirective],
    styles: [".picture[_ngcontent-%COMP%] {\r\n  max-width: 200px;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.about-container[_ngcontent-%COMP%] {\r\n  margin: 32px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsInNvdXJjZXNDb250ZW50IjpbIi5waWN0dXJlIHtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4uYWJvdXQtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDMycHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
  return AboutComponent;
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/helper.service */ 3974);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);











function AppComponent_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-toolbar", 6, 7)(3, "button", 8)(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Madeleine Saxer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-menu", 10, 11)(10, "div", 12)(11, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12)(14, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12)(17, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 12)(23, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 12)(26, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_1_ng_container_1_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.changeLanguage({
        isGerman: true,
        isEnglish: false
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " de ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_1_ng_container_1_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.changeLanguage({
        isGerman: false,
        isEnglish: true
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " en ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.navigator.gallery);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.navigator.soldGallery);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.navigator.exhibition);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.navigator.me);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.navigator.contact);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("ngClass", ctx_r1.isGerman() ? "mat-accent" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("ngClass", ctx_r1.isEnglish() ? "mat-accent" : "");
  }
}
function AppComponent_div_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar", 6)(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Madeleine Saxer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 8)(14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "language");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-menu", null, 24)(18, "div", 12)(19, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_1_ng_template_2_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.changeLanguage({
        isGerman: true,
        isEnglish: false
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " de ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12)(22, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_1_ng_template_2_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.changeLanguage({
        isGerman: false,
        isEnglish: true
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " en ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.navigator.gallery);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.navigator.soldGallery);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.navigator.exhibition);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.navigator.me);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.navigator.contact);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("ngClass", ctx_r3.isGerman() ? "mat-accent" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("ngClass", ctx_r3.isEnglish() ? "mat-accent" : "");
  }
}
function AppComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_1_ng_container_1_Template, 30, 8, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_div_1_ng_template_2_Template, 24, 8, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isMobile())("ngIfElse", _r2);
  }
}
let AppComponent = /*#__PURE__*/(() => {
  class AppComponent {
    constructor(helper) {
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "helper", void 0);
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "navigator", void 0);
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "alive", void 0);
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "language", void 0);
      this.helper = helper;
      this.alive = true;
      this.helper.getNavigator().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeWhile)(() => this.alive)).subscribe(data => this.navigator = data);
      this.helper.getLanguage().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeWhile)(() => this.alive)).subscribe(data => this.language = data);
    }
    changeLanguage(language) {
      this.helper.changeLanguage(language);
    }
    ngOnInit() {
      this.helper.loadLanguage();
    }
    ngOnDestroy() {
      this.alive = false;
    }
    isGerman() {
      return this.language && this.language.isGerman;
    }
    isEnglish() {
      return this.language && this.language.isEnglish;
    }
    isMobile() {
      return window.innerWidth < 600;
    }
  }
  (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppComponent, "\u0275fac", function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_helper_service__WEBPACK_IMPORTED_MODULE_1__.HelperService));
  });
  (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 4,
    vars: 1,
    consts: [["fxLayout", "column", "fxLayoutAlign", "center", 1, "container"], ["class", "header", 4, "ngIf"], [1, "content"], [1, "header"], [4, "ngIf", "ngIfElse"], ["largeNavigation", ""], ["fxFlex", "", "fxLayout", "row wrap", 1, "toolbar"], ["toolbarMobile", ""], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["mat-button", "", "routerLink", "/gallery", "routerLinkActive", "active", 1, "title"], [1, "mobile-menu"], ["navigationMenu", "matMenu"], ["mat-menu-item", ""], ["mat-button", "", "routerLink", "/gallery", "routerLinkActive", "active", "routerLinkActive", "mat-accent", 1, "nav-button"], ["mat-button", "", "routerLink", "/gallery-sold", "routerLinkActive", "active", "routerLinkActive", "mat-accent", 1, "nav-button"], ["mat-button", "", "routerLink", "/exhibition", "routerLinkActive", "active", "routerLinkActive", "mat-accent", 1, "nav-button"], ["mat-button", "", "routerLink", "/me", "routerLinkActive", "active", "routerLinkActive", "mat-accent", 1, "nav-button"], ["mat-button", "", "routerLink", "/contact", "routerLinkActive", "active", "routerLinkActive", "mat-accent", 1, "nav-button"], ["mat-button", "", 1, "language-button", 3, "ngClass", "click"], ["mat-button", "", "routerLink", "/gallery", "routerLinkActive", "active", "routerLinkActive", "mat-accent", 1, "push-to-right"], ["mat-button", "", "routerLink", "/gallery-sold", "routerLinkActive", "active", "routerLinkActive", "mat-accent"], ["mat-button", "", "routerLink", "/exhibition", "routerLinkActive", "active", "routerLinkActive", "mat-accent"], ["mat-button", "", "routerLink", "/me", "routerLinkActive", "active", "routerLinkActive", "mat-accent"], ["mat-button", "", "routerLink", "/contact", "routerLinkActive", "active", "routerLinkActive", "mat-accent"], ["languageMenu", "matMenu"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_1_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.navigator);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuTrigger, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkActive, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.LayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.LayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.FlexDirective],
    styles: [".header[_ngcontent-%COMP%] {\r\n  flex-shrink: 0;\r\n}\r\n\r\n.mat-toolbar[_ngcontent-%COMP%] {\r\n  background-color: #222222;\r\n  color: whitesmoke;\r\n}\r\n\r\n.toolbar[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  flex-grow: 1;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.push-to-right[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  line-height: calc(32px + 16px);\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  position: relative; \r\n  overflow: auto;\r\n  height: 100%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\n.nav-button[_ngcontent-%COMP%] {\r\n  height: 48px;\r\n  width: 160px;\r\n  z-index: 9999;\r\n}\r\n\r\n.language-button[_ngcontent-%COMP%] {\r\n  height: 48px;\r\n  width: 80px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCLEVBQUUsd0NBQXdDO0VBQzVELGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmhlYWRlciB7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLnRvb2xiYXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnB1c2gtdG8tcmlnaHQge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogY2FsYygzMnB4ICsgMTZweCk7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIG5lZWQgdGhpcyB0byBwb3NpdGlvbiBpbm5lciBjb250ZW50ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9uIHtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbi5sYW5ndWFnZS1idXR0b24ge1xyXG4gIGhlaWdodDogNDhweDtcclxuICB3aWR0aDogODBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
  return AppComponent;
})();

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery/gallery.component */ 325);
/* harmony import */ var _exhibition_exhibition_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exhibition/exhibition.component */ 9753);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ 6698);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @kolkov/ngx-gallery */ 5197);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout */ 1378);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ 1563);
/* harmony import */ var _soldGallery_soldGallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./soldGallery/soldGallery.component */ 3603);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);























const appRoutes = [{
  path: 'gallery',
  component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__.GalleryComponent
}, {
  path: 'gallery-sold',
  component: _soldGallery_soldGallery_component__WEBPACK_IMPORTED_MODULE_6__.SoldGalleryComponent
}, {
  path: 'me',
  component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent
}, {
  path: 'exhibition',
  component: _exhibition_exhibition_component__WEBPACK_IMPORTED_MODULE_3__.ExhibitionComponent
}, {
  path: 'contact',
  component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__.ContactComponent
}, {
  path: '**',
  component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__.GalleryComponent
}];
let AppModule = /*#__PURE__*/(() => {
  class AppModule {}
  (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppModule, "\u0275fac", function AppModule_Factory(t) {
    return new (t || AppModule)();
  });
  (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  }));
  (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forRoot(appRoutes), _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_17__.NgxGalleryModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__.FlexLayoutModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__.FontAwesomeModule]
  }));
  return AppModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__.GalleryComponent, _soldGallery_soldGallery_component__WEBPACK_IMPORTED_MODULE_6__.SoldGalleryComponent, _exhibition_exhibition_component__WEBPACK_IMPORTED_MODULE_3__.ExhibitionComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__.ContactComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_17__.NgxGalleryModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__.MatTabsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__.FlexLayoutModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_21__.FontAwesomeModule]
  });
})();

/***/ }),

/***/ 1563:
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/helper.service */ 3974);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);






function ContactComponent_div_0_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.contact.name);
  }
}
function ContactComponent_div_0_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.contact.street);
  }
}
function ContactComponent_div_0_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.contact.city);
  }
}
function ContactComponent_div_0_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.contact.country);
  }
}
function ContactComponent_div_0_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "tel:", ctx_r5.contact.number, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.contact.number);
  }
}
function ContactComponent_div_0_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx_r6.contact.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.contact.email);
  }
}
function ContactComponent_div_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const text_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](text_r8);
  }
}
function ContactComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ContactComponent_div_0_p_3_Template, 2, 1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ContactComponent_div_0_p_4_Template, 2, 1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ContactComponent_div_0_p_5_Template, 2, 1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ContactComponent_div_0_p_6_Template, 2, 1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ContactComponent_div_0_p_7_Template, 3, 2, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ContactComponent_div_0_p_8_Template, 3, 2, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ContactComponent_div_0_div_10_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.contact.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.contact.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.contact.street);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.contact.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.contact.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.contact.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.contact.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.contact.text);
  }
}
let ContactComponent = /*#__PURE__*/(() => {
  class ContactComponent {
    constructor(helper) {
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "helper", void 0);
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contact", void 0);
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "alive", void 0);
      this.helper = helper;
      this.alive = true;
      this.helper.getContact().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeWhile)(() => this.alive)).subscribe(data => this.contact = data);
    }
    ngOnInit() {
      this.helper.loadLanguage();
    }
    ngOnDestroy() {
      this.alive = false;
    }
  }
  (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ContactComponent, "\u0275fac", function ContactComponent_Factory(t) {
    return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_helper_service__WEBPACK_IMPORTED_MODULE_1__.HelperService));
  });
  (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ContactComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    decls: 1,
    vars: 1,
    consts: [["class", "contact-container", 4, "ngIf"], [1, "contact-container"], ["class", "info-text", 4, "ngIf"], ["fxLayout", "column", 1, "contact-text"], ["fxLayout", "column wrap", "class", "text", 4, "ngFor", "ngForOf"], [1, "info-text"], [1, "no-style", 3, "href"], ["fxLayout", "column wrap", 1, "text"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ContactComponent_div_0_Template, 11, 8, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contact);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.LayoutDirective],
    styles: [".text[_ngcontent-%COMP%] {\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.contact-container[_ngcontent-%COMP%] {\r\n  margin: 32px;\r\n}\r\n\r\n.info-text[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n}\r\n\r\n.no-style[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n.contact-text[_ngcontent-%COMP%]{\r\n  margin-top: 32px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5jb250YWN0LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAzMnB4O1xyXG59XHJcblxyXG4uaW5mby10ZXh0e1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm5vLXN0eWxle1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jb250YWN0LXRleHR7XHJcbiAgbWFyZ2luLXRvcDogMzJweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
  return ContactComponent;
})();

/***/ }),

/***/ 9753:
/*!****************************************************!*\
  !*** ./src/app/exhibition/exhibition.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExhibitionComponent": () => (/* binding */ ExhibitionComponent)
/* harmony export */ });
/* harmony import */ var C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/helper.service */ 3974);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);










function ExhibitionComponent_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opening_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", opening_r5.day, " ", opening_r5.from, "-", opening_r5.to, " ");
  }
}
function ExhibitionComponent_div_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const exhibition_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](exhibition_r1.finissage.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", exhibition_r1.finissage.date, ", ", exhibition_r1.finissage.from, "");
  }
}
function ExhibitionComponent_div_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "a", 16)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Download PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const exhibition_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r4.sanitizer.bypassSecurityTrustResourceUrl("assets/image/exhibition/" + exhibition_r1.print_version), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ExhibitionComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "mat-tab", 2)(2, "div", 3)(3, "div")(4, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ExhibitionComponent_div_1_div_15_Template, 2, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8)(17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ExhibitionComponent_div_1_div_21_Template, 5, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 8)(23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div")(26, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ExhibitionComponent_div_1_div_28_Template, 5, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 11)(30, "div", 12)(31, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "iframe", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const exhibition_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", exhibition_r1.date_start);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](exhibition_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", exhibition_r1.date_start, " to ", exhibition_r1.date_end, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](exhibition_r1.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](exhibition_r1.opening_text);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", exhibition_r1.opening);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](exhibition_r1.vernissage.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", exhibition_r1.vernissage.date, ", ", exhibition_r1.vernissage.from, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", exhibition_r1.finissage.title.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](exhibition_r1.contact.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r0.sanitizer.bypassSecurityTrustResourceUrl(exhibition_r1.contact.url), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", exhibition_r1.contact.url, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", exhibition_r1.print_version.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.sanitizer.bypassSecurityTrustResourceUrl("assets/image/exhibition/" + exhibition_r1.picture_url), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", exhibition_r1.picture_alt_text);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.sanitizer.bypassSecurityTrustResourceUrl(exhibition_r1.url), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeResourceUrl"]);
  }
}
let ExhibitionComponent = /*#__PURE__*/(() => {
  class ExhibitionComponent {
    constructor(helper, sanitizer) {
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "helper", void 0);
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sanitizer", void 0);
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "exhibitions", void 0);
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "alive", void 0);
      this.helper = helper;
      this.sanitizer = sanitizer;
      this.alive = true;
      this.helper.getExhibitions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeWhile)(() => this.alive)).subscribe(data => this.exhibitions = data);
    }
    ngOnInit() {
      this.helper.loadLanguage();
    }
    ngOnDestroy() {
      this.alive = false;
    }
  }
  (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ExhibitionComponent, "\u0275fac", function ExhibitionComponent_Factory(t) {
    return new (t || ExhibitionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_helper_service__WEBPACK_IMPORTED_MODULE_1__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer));
  });
  (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ExhibitionComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ExhibitionComponent,
    selectors: [["app-exhibition"]],
    decls: 2,
    vars: 1,
    consts: [[1, "exhibition-container"], [4, "ngFor", "ngForOf"], [3, "label"], ["fxLayout", "column"], [1, "exhibition-title"], ["fxLayout", "row", "fxLayout.xs", "row wrap", "fxLayoutGap", "32px"], [1, "info-part"], [1, "exhibition-date"], [1, "text"], ["class", "text", 4, "ngIf"], [3, "href"], [1, "exhibition-addition-container"], ["fxLayout", "column", "fxLayoutGap", "16px"], [1, "exhibition-picture"], [1, "exhibition-addition", 3, "src", "alt"], ["frameborder", "0", "scrolling", "no", "marginheight", "0", "marginwidth", "0", "allowfullscreen", "", 1, "exhibition-addition", 3, "src"], ["mat-raised-button", "", 3, "href"]],
    template: function ExhibitionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ExhibitionComponent_div_1_Template, 34, 18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.exhibitions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabGroup, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.LayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.LayoutGapDirective],
    styles: [".exhibition-addition[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  max-height: 200px;\r\n}\r\n\r\n.exhibition-picture[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  width: auto;\r\n  max-height: 200px;\r\n}\r\n\r\n.exhibition-container[_ngcontent-%COMP%]{\r\n  margin: 32px;\r\n}\r\n\r\n.info-part[_ngcontent-%COMP%]{\r\n  min-width: 50%;\r\n}\r\n\r\n.text[_ngcontent-%COMP%]{\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.exhibition-date[_ngcontent-%COMP%]{\r\n  margin-top: 0;\r\n}\r\n\r\n.exhibition-addition-container[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhoaWJpdGlvbi9leGhpYml0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwic291cmNlc0NvbnRlbnQiOlsiLmV4aGliaXRpb24tYWRkaXRpb24ge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmV4aGliaXRpb24tcGljdHVyZSB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uZXhoaWJpdGlvbi1jb250YWluZXJ7XHJcbiAgbWFyZ2luOiAzMnB4O1xyXG59XHJcblxyXG4uaW5mby1wYXJ0e1xyXG4gIG1pbi13aWR0aDogNTAlO1xyXG59XHJcblxyXG4udGV4dHtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uZXhoaWJpdGlvbi1kYXRle1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5leGhpYml0aW9uLWFkZGl0aW9uLWNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  }));
  return ExhibitionComponent;
})();

/***/ }),

/***/ 325:
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryComponent": () => (/* binding */ GalleryComponent)
/* harmony export */ });
/* harmony import */ var C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5050);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ 5977);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kolkov/ngx-gallery */ 5197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/helper.service */ 3974);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);








function GalleryComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ngx-gallery", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r0.galleryOptions)("images", ctx_r0.galleryImages);
  }
}
let GalleryComponent = /*#__PURE__*/(() => {
  class GalleryComponent {
    constructor(helper) {
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "helper", void 0);
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pictures", void 0);
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "alive", void 0);
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "galleryOptions", void 0);
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "galleryImages", void 0);
      this.helper = helper;
      this.alive = true;
      this.helper.getPicture().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeWhile)(() => this.alive)).subscribe(data => {
        this.pictures = data;
        this.galleryImages = this.getGalleryImages(this.pictures);
      });
    }
    ngOnInit() {
      this.helper.loadLanguage();
      this.galleryImages = [];
      this.galleryOptions = [{
        thumbnailsColumns: 10,
        thumbnailsMoveSize: 10,
        thumbnailsRows: 5,
        imageAnimation: _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_5__.NgxGalleryAnimation.Slide,
        layout: _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_5__.NgxGalleryLayout.ThumbnailsTop,
        imageDescription: true,
        imageArrows: true,
        imageSwipe: true,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        previewKeyboardNavigation: true,
        thumbnailsRemainingCount: false,
        width: '100%',
        height: '100%',
        thumbnailsPercent: '100',
        thumbnailsArrows: true,
        thumbnailsSwipe: true,
        previewFullscreen: true,
        imagePercent: 0,
        image: false
      },
      // max-width 1300
      {
        thumbnailsColumns: 6,
        thumbnailsRows: 5,
        thumbnailsMoveSize: 6,
        breakpoint: 1300
      },
      // max-width 800
      {
        thumbnailsColumns: 6,
        thumbnailsRows: 5,
        thumbnailsMoveSize: 6,
        breakpoint: 800
      },
      // max-width 700
      {
        thumbnailsColumns: 3,
        thumbnailsRows: 5,
        thumbnailsMoveSize: 4,
        breakpoint: 700
      },
      // max-width 500
      {
        thumbnailsColumns: 2,
        thumbnailsRows: 5,
        thumbnailsMoveSize: 2,
        breakpoint: 500
      }];
    }
    ngOnDestroy() {
      this.alive = false;
    }
    getGalleryImages(pictures) {
      const gallery = [];
      const path = 'assets/image/paintings/';
      pictures.forEach(picture => {
        if (picture.sold !== false) {
          return;
        }
        gallery.push({
          small: path + picture.url_min,
          medium: path + picture.url,
          big: path + picture.url,
          label: picture.caption,
          description: picture.title + ' <em>' + picture.size + '</em> <br\> ' + picture.desc
        });
      });
      return gallery;
    }
  }
  (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(GalleryComponent, "\u0275fac", function GalleryComponent_Factory(t) {
    return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_helper_service__WEBPACK_IMPORTED_MODULE_2__.HelperService));
  });
  (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(GalleryComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: GalleryComponent,
    selectors: [["app-gallery"]],
    decls: 2,
    vars: 1,
    consts: [[1, "gallery-container"], ["class", "gallery", 4, "ngIf"], [1, "gallery"], ["oncontextmenu", "return false", 3, "options", "images"]],
    template: function GalleryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GalleryComponent_div_1_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.pictures);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_5__.NgxGalleryComponent],
    styles: [".gallery[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.gallery-container[_ngcontent-%COMP%] {\r\n  margin: 32px;\r\n  height: calc(100% - 64px);\r\n  width: calc(100% - 64px);\r\n}\r\n\r\n  .ngx-gallery-preview-img-wrapper {\r\n  background: rgba(0, 0, 0, 0.9)\r\n}\r\n\r\n  .ngx-gallery-preview-text {\r\n  background: rgba(0, 0, 0, 0.9) !important;\r\n  color: #909090 !important;\r\n}\r\n\r\n.ngx-gallery-icon[_ngcontent-%COMP%]   .ngx-gallery-icon-content[_ngcontent-%COMP%] {\r\n  color: #909090 !important;\r\n}\r\n\r\n  .ngx-gallery-icon .ngx-gallery-icon-content {\r\n  color: #e2e2e2 !important;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsInNvdXJjZXNDb250ZW50IjpbIi5nYWxsZXJ5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5nYWxsZXJ5LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAzMnB4O1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDY0cHgpO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm5neC1nYWxsZXJ5LXByZXZpZXctaW1nLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45KVxyXG59XHJcblxyXG46Om5nLWRlZXAgLm5neC1nYWxsZXJ5LXByZXZpZXctdGV4dCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM5MDkwOTAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5neC1nYWxsZXJ5LWljb24gLm5neC1nYWxsZXJ5LWljb24tY29udGVudCB7XHJcbiAgY29sb3I6ICM5MDkwOTAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5uZ3gtZ2FsbGVyeS1pY29uIC5uZ3gtZ2FsbGVyeS1pY29uLWNvbnRlbnQge1xyXG4gIGNvbG9yOiAjZTJlMmUyICFpbXBvcnRhbnQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
  return GalleryComponent;
})();

/***/ }),

/***/ 3974:
/*!******************************************!*\
  !*** ./src/app/shared/helper.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelperService": () => (/* binding */ HelperService)
/* harmony export */ });
/* harmony import */ var C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _me__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./me */ 2643);
/* harmony import */ var _picture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./picture */ 415);
/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news */ 3634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);








let HelperService = /*#__PURE__*/(() => {
  class HelperService {
    constructor(http) {
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "http", void 0);
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "json", void 0);
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "language", void 0);
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "lastLanguage", void 0);
      this.http = http;
      this.json = this.getJSON();
      this.language = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      this.setLanguage({
        isEnglish: false,
        isGerman: true
      });
    }
    setLanguage(language) {
      this.lastLanguage = language;
      this.language.next(language);
    }
    changeLanguage(language) {
      this.setLanguage(language);
    }
    loadLanguage() {
      this.language.next(this.lastLanguage);
    }
    getLanguage() {
      return this.language;
    }
    getJSON() {
      return this.http.get('./assets/data.json');
    }
    getContact() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)(this.json, this.language).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([data, language]) => {
        const contactDto = data.contact;
        if (language.isGerman) {
          return contactDto.de;
        }
        return contactDto.en;
      }));
    }
    getNavigator() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)(this.json, this.language).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([data, language]) => {
        const navigatorDto = data.navigator;
        if (language.isGerman) {
          return navigatorDto.de;
        }
        return navigatorDto.en;
      }));
    }
    getNews() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)(this.json, this.language).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([data, language]) => {
        const newsDto = data.news;
        const news = new _news__WEBPACK_IMPORTED_MODULE_3__.News();
        news.href = newsDto.href;
        if (language.isGerman) {
          news.buttontext = newsDto.de.buttontext;
          news.desc = newsDto.de.desc;
          news.desc2 = newsDto.de.desc2;
          news.title = newsDto.de.title;
        } else {
          news.buttontext = newsDto.en.buttontext;
          news.desc = newsDto.en.desc;
          news.desc2 = newsDto.en.desc2;
          news.title = newsDto.en.title;
        }
        return news;
      }));
    }
    getAboutMe() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)(this.json, this.language).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([data, language]) => {
        const meDto = data.me;
        const me = new _me__WEBPACK_IMPORTED_MODULE_1__.Me();
        me.picture = meDto.picture;
        if (language.isGerman) {
          me.text = meDto.de.text;
          me.title = meDto.de.title;
        } else {
          me.text = meDto.en.text;
          me.title = meDto.en.title;
        }
        return me;
      }));
    }
    getPicture() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)(this.json, this.language).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([data, language]) => {
        const pictureDtos = data.picture;
        const pictures = [];
        if (language.isGerman) {
          pictureDtos.forEach(p => pictures.push(this.getPictureDe(p)));
        } else {
          pictureDtos.forEach(p => pictures.push(this.getPictureEn(p)));
        }
        return pictures;
      }));
    }
    getPictureDe(pictureDto) {
      const picture = new _picture__WEBPACK_IMPORTED_MODULE_2__.Picture();
      picture.size = pictureDto.size;
      picture.url = pictureDto.url;
      picture.url_min = pictureDto.url_min;
      picture.caption = pictureDto.de.caption;
      picture.desc = pictureDto.de.desc;
      picture.title = pictureDto.de.title;
      picture.sold = pictureDto.sold === null || pictureDto.sold === undefined ? false : pictureDto.sold;
      return picture;
    }
    getPictureEn(pictureDto) {
      const picture = new _picture__WEBPACK_IMPORTED_MODULE_2__.Picture();
      picture.size = pictureDto.size;
      picture.url = pictureDto.url;
      picture.url_min = pictureDto.url_min;
      picture.caption = pictureDto.en.caption;
      picture.desc = pictureDto.en.desc;
      picture.title = pictureDto.en.title;
      picture.sold = pictureDto.sold === null || pictureDto.sold === undefined ? false : pictureDto.sold;
      return picture;
    }
    getExhibitions() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)(this.json, this.language).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([data, language]) => {
        const exhibitionDto = data.exhibition;
        const exhibition = [];
        if (language.isGerman) {
          exhibitionDto.forEach(e => exhibition.push(this.getDeExhibition(e)));
        } else {
          exhibitionDto.forEach(e => exhibition.push(this.getEnExhibition(e)));
        }
        return exhibition;
      }));
    }
    getDeExhibition(exhibitionDto) {
      const openings = [];
      exhibitionDto.opening.forEach(o => {
        return openings.push({
          from: o.from,
          to: o.to,
          day: o.day.de
        });
      });
      const exhibition = {
        title: exhibitionDto.de.title,
        text: exhibitionDto.de.text,
        picture_alt_text: exhibitionDto.de.picture_alt_text,
        url: exhibitionDto.url,
        date_start: exhibitionDto['date-start'],
        date_end: exhibitionDto['date-end'],
        print_version: exhibitionDto['print-version'],
        contact: {
          url: exhibitionDto.contact.url,
          text: exhibitionDto.contact.text.de
        },
        vernissage: {
          title: exhibitionDto.vernissage.title.de,
          from: exhibitionDto.vernissage.from,
          date: exhibitionDto.vernissage.date
        },
        finissage: {
          title: exhibitionDto.finissage.title.de,
          from: exhibitionDto.finissage.from,
          date: exhibitionDto.finissage.date
        },
        opening_text: exhibitionDto.opening_text.de,
        opening: openings,
        picture_url: exhibitionDto.picture_url
      };
      return exhibition;
    }
    getEnExhibition(exhibitionDto) {
      const openings = [];
      exhibitionDto.opening.forEach(o => {
        return openings.push({
          from: o.from,
          to: o.to,
          day: o.day.en
        });
      });
      const exhibition = {
        title: exhibitionDto.en.title,
        text: exhibitionDto.en.text,
        picture_alt_text: exhibitionDto.en.picture_alt_text,
        url: exhibitionDto.url,
        date_start: exhibitionDto['date-start'],
        date_end: exhibitionDto['date-end'],
        print_version: exhibitionDto['print-version'],
        contact: {
          url: exhibitionDto.contact.url,
          text: exhibitionDto.contact.text.en
        },
        vernissage: {
          title: exhibitionDto.vernissage.title.en,
          from: exhibitionDto.vernissage.from,
          date: exhibitionDto.vernissage.date
        },
        finissage: {
          title: exhibitionDto.finissage.title.en,
          from: exhibitionDto.finissage.from,
          date: exhibitionDto.finissage.date
        },
        opening_text: exhibitionDto.opening_text.en,
        opening: openings,
        picture_url: exhibitionDto.picture_url
      };
      return exhibition;
    }
  }
  (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HelperService, "\u0275fac", function HelperService_Factory(t) {
    return new (t || HelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient));
  });
  (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(HelperService, "\u0275prov", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: HelperService,
    factory: HelperService.ɵfac,
    providedIn: 'root'
  }));
  return HelperService;
})();

/***/ }),

/***/ 2643:
/*!******************************!*\
  !*** ./src/app/shared/me.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Me": () => (/* binding */ Me)
/* harmony export */ });
/* harmony import */ var C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);

class Me {
  constructor() {
    (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "picture", void 0);
    (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "title", void 0);
    (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "text", void 0);
  }
}

/***/ }),

/***/ 3634:
/*!********************************!*\
  !*** ./src/app/shared/news.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "News": () => (/* binding */ News)
/* harmony export */ });
/* harmony import */ var C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);

class News {
  constructor() {
    (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "href", void 0);
    (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "title", void 0);
    (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "desc", void 0);
    (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "desc2", void 0);
    (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "buttontext", void 0);
  }
}

/***/ }),

/***/ 415:
/*!***********************************!*\
  !*** ./src/app/shared/picture.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Picture": () => (/* binding */ Picture)
/* harmony export */ });
/* harmony import */ var C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);

class Picture {
  constructor() {
    (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "url", void 0);
    (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "url_min", void 0);
    (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "size", void 0);
    (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "title", void 0);
    (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "desc", void 0);
    (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "caption", void 0);
    (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sold", void 0);
  }
}

/***/ }),

/***/ 3603:
/*!******************************************************!*\
  !*** ./src/app/soldGallery/soldGallery.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoldGalleryComponent": () => (/* binding */ SoldGalleryComponent)
/* harmony export */ });
/* harmony import */ var C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5050);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ 5977);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kolkov/ngx-gallery */ 5197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/helper.service */ 3974);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);








function SoldGalleryComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ngx-gallery", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r0.galleryOptions)("images", ctx_r0.galleryImages);
  }
}
let SoldGalleryComponent = /*#__PURE__*/(() => {
  class SoldGalleryComponent {
    constructor(helper) {
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "helper", void 0);
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pictures", void 0);
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "alive", void 0);
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "galleryOptions", void 0);
      (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "galleryImages", void 0);
      this.helper = helper;
      this.alive = true;
      this.helper.getPicture().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeWhile)(() => this.alive)).subscribe(data => {
        this.pictures = data;
        this.galleryImages = this.getGalleryImages(this.pictures);
      });
    }
    ngOnInit() {
      this.helper.loadLanguage();
      this.galleryImages = [];
      this.galleryOptions = [{
        thumbnailsColumns: 10,
        thumbnailsMoveSize: 10,
        thumbnailsRows: 5,
        imageAnimation: _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_5__.NgxGalleryAnimation.Slide,
        layout: _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_5__.NgxGalleryLayout.ThumbnailsTop,
        imageDescription: true,
        imageArrows: true,
        imageSwipe: true,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        previewKeyboardNavigation: true,
        thumbnailsRemainingCount: false,
        width: '100%',
        height: '100%',
        thumbnailsPercent: '100',
        thumbnailsArrows: true,
        thumbnailsSwipe: true,
        previewFullscreen: true,
        imagePercent: 0,
        image: false
      },
      // max-width 1300
      {
        thumbnailsColumns: 6,
        thumbnailsRows: 5,
        thumbnailsMoveSize: 6,
        breakpoint: 1300
      },
      // max-width 800
      {
        thumbnailsColumns: 6,
        thumbnailsRows: 5,
        thumbnailsMoveSize: 6,
        breakpoint: 800
      },
      // max-width 700
      {
        thumbnailsColumns: 3,
        thumbnailsRows: 5,
        thumbnailsMoveSize: 4,
        breakpoint: 700
      },
      // max-width 500
      {
        thumbnailsColumns: 2,
        thumbnailsRows: 5,
        thumbnailsMoveSize: 2,
        breakpoint: 500
      }];
    }
    ngOnDestroy() {
      this.alive = false;
    }
    getGalleryImages(pictures) {
      const gallery = [];
      const path = 'assets/image/paintings/';
      pictures.forEach(picture => {
        if (picture.sold !== true) {
          return;
        }
        gallery.push({
          small: path + picture.url_min,
          medium: path + picture.url,
          big: path + picture.url,
          label: picture.caption,
          description: picture.title + ' <em>' + picture.size + '</em> <br\> ' + picture.desc
        });
      });
      return gallery;
    }
  }
  (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SoldGalleryComponent, "\u0275fac", function SoldGalleryComponent_Factory(t) {
    return new (t || SoldGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_helper_service__WEBPACK_IMPORTED_MODULE_2__.HelperService));
  });
  (0,C_git_MadeleineSaxer_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SoldGalleryComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SoldGalleryComponent,
    selectors: [["app-sold-gallery"]],
    decls: 2,
    vars: 1,
    consts: [[1, "gallery-container"], ["class", "gallery", 4, "ngIf"], [1, "gallery"], ["oncontextmenu", "return false", 3, "options", "images"]],
    template: function SoldGalleryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SoldGalleryComponent_div_1_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.pictures);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _kolkov_ngx_gallery__WEBPACK_IMPORTED_MODULE_5__.NgxGalleryComponent],
    styles: [".gallery[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.gallery-container[_ngcontent-%COMP%] {\r\n  margin: 32px;\r\n  height: calc(100% - 64px);\r\n  width: calc(100% - 64px);\r\n}\r\n\r\n  .ngx-gallery-preview-img-wrapper {\r\n  background: rgba(0, 0, 0, 0.9)\r\n}\r\n\r\n  .ngx-gallery-preview-text {\r\n  background: rgba(0, 0, 0, 0.9) !important;\r\n  color: #909090 !important;\r\n}\r\n\r\n.ngx-gallery-icon[_ngcontent-%COMP%]   .ngx-gallery-icon-content[_ngcontent-%COMP%] {\r\n  color: #909090 !important;\r\n}\r\n\r\n  .ngx-gallery-icon .ngx-gallery-icon-content {\r\n  color: #e2e2e2 !important;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsInNvdXJjZXNDb250ZW50IjpbIi5nYWxsZXJ5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5nYWxsZXJ5LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAzMnB4O1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDY0cHgpO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm5neC1nYWxsZXJ5LXByZXZpZXctaW1nLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45KVxyXG59XHJcblxyXG46Om5nLWRlZXAgLm5neC1nYWxsZXJ5LXByZXZpZXctdGV4dCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM5MDkwOTAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5neC1nYWxsZXJ5LWljb24gLm5neC1nYWxsZXJ5LWljb24tY29udGVudCB7XHJcbiAgY29sb3I6ICM5MDkwOTAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5uZ3gtZ2FsbGVyeS1pY29uIC5uZ3gtZ2FsbGVyeS1pY29uLWNvbnRlbnQge1xyXG4gIGNvbG9yOiAjZTJlMmUyICFpbXBvcnRhbnQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  }));
  return SoldGalleryComponent;
})();

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ 5977);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);




// gesture

if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map