(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nativ\Documents\GitHub\KSPlay\src\main.ts */"zUnb");


/***/ }),

/***/ "7wYD":
/*!*************************************************!*\
  !*** ./src/app/products/list/list.component.ts ***!
  \*************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/products.service */ "jOXV");
/* harmony import */ var src_app_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cart.service */ "BkeJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function ListComponent_ng_container_6_ul_1_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.price, "\u20AA ");
} }
function ListComponent_ng_container_6_ul_1_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "del", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.price * 1.2, "\u20AA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.price, "\u20AA ");
} }
const _c0 = function (a1) { return ["/products", a1]; };
function ListComponent_ng_container_6_ul_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_ng_container_6_ul_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.addItem(item_r1.serialNumber); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ListComponent_ng_container_6_ul_1_ng_container_20_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ListComponent_ng_container_6_ul_1_ng_template_21_Template, 3, 2, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "More Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, item_r1.serialNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Serial Number: ", item_r1.serialNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isDiscounted(item_r1.serialNumber))("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, item_r1.serialNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ListComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_ng_container_6_ul_1_Template, 27, 12, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.show == "all" || item_r1.category.indexOf(ctx_r0.show) != -1);
} }
class ListComponent {
    // item.category.indexOf(show)!=-1
    constructor(products, cart) {
        this.products = products;
        this.cart = cart;
    }
    ngOnInit() {
        this.arr = this.products.getProducts();
        this.discount = this.products.getDiscounted();
    }
    setShow(show) {
        this.show = show;
    }
    addItem(serialNumber) {
        this.cart.addItem(serialNumber);
    }
    isDiscounted(serialNumber) {
        for (let tmp of this.discount)
            if (tmp.serialNumber == serialNumber)
                return true;
        return false;
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], inputs: { show: "show" }, decls: 7, vars: 2, consts: [[2, "margin-bottom", "4%"], [1, "row", "text-center", "text-white", "mb-5"], [1, "col-lg-7", "mx-auto"], [1, "display-5"], [1, "row", "d-flex", "flex-row", "justify-content-around"], [4, "ngFor", "ngForOf"], ["style", "margin: 1%; padding: 1%", "class", "list-group shadow-none p-2 mb-2 bg-dark rounded", 4, "ngIf"], [1, "list-group", "shadow-none", "p-2", "mb-2", "bg-dark", "rounded", 2, "margin", "1%", "padding", "1%"], [1, "list-group-item"], [1, "media", "align-items-lg-center"], [1, "media-body", "order-2", "order-lg-1"], [1, "text-dark", 3, "routerLink"], [1, "font-weight-bold"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-1"], [1, "list-inline", "small"], [1, "h5"], [1, "fa", "fa-star", "text-dark"], [1, "d-flex", "justify-content-start"], [1, "h6"], [1, "btn", "btn-primary", 2, "margin-right", "5px", 3, "click"], [1, "d-inline", "fa", "fa-star"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "btn", "btn-outline-info", 3, "routerLink"], ["alt", "Generic placeholder image", "width", "120", 1, "ml-lg-5", "order-1", "order-lg-2", 3, "src"], [1, "d-inline", "text-danger"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListComponent_ng_container_6_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.show == "all" ? "Products" : ctx.show, " List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arr);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".d-flex[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{\r\n    flex: 1 1 0px;\r\n    max-width: 4in;\r\n}\r\n.list-group-item[_ngcontent-%COMP%]{\r\n    transition:box-shadow background-color;\r\n    transition-duration: 0.4s;\r\n}\r\n.list-group-item[_ngcontent-%COMP%]:hover{\r\n    box-shadow:0 0 5px ghostwhite;\r\n    background-color: ghostwhite;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxzQ0FBc0M7SUFDdEMseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsNEJBQTRCO0FBQ2hDIiwiZmlsZSI6Imxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kLWZsZXggKntcclxuICAgIGZsZXg6IDEgMSAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDRpbjtcclxufVxyXG4ubGlzdC1ncm91cC1pdGVte1xyXG4gICAgdHJhbnNpdGlvbjpib3gtc2hhZG93IGJhY2tncm91bmQtY29sb3I7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG59XHJcbi5saXN0LWdyb3VwLWl0ZW06aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OjAgMCA1cHggZ2hvc3R3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdob3N0d2hpdGU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.css']
            }]
    }], function () { return [{ type: src_app_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] }, { type: src_app_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }]; }, { show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "jOXV");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "BkeJ");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");








const _c0 = function (a1) { return ["/products", a1]; };
function HomeComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_tr_23_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const tmp_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.addItem(tmp_r2.serialNumber); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "del", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tmp_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tmp_r2.serialNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", tmp_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("width", tmp_r2.category == "Consoles" ? "100" : "50")("height", tmp_r2.category == "Consoles" ? "50" : "75");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, tmp_r2.serialNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tmp_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", tmp_r2.price, "\u20AA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", tmp_r2.price * 1.2, "\u20AA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tmp_r2.category);
} }
function HomeComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_tr_41_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const tmp_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.addItem(tmp_r5.serialNumber); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tmp_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tmp_r5.serialNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", tmp_r5.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("width", tmp_r5.category == "Consoles" ? "100" : "50")("height", tmp_r5.category == "Consoles" ? "50" : "75");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, tmp_r5.serialNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tmp_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", tmp_r5.price, "\u20AA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tmp_r5.category);
} }
class HomeComponent {
    constructor(route, products, cart) {
        this.route = route;
        this.products = products;
        this.cart = cart;
    }
    ngOnInit() {
        this.username = this.route.snapshot.params['name'];
        this.discounted = this.products.getDiscounted();
        this.newProducts = this.products.getNew();
    }
    addItem(serialNumber) {
        this.cart.addItem(serialNumber);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 44, vars: 3, consts: [[1, "page"], [1, "page-haader", "d-flex", "justify-content-center", "text-light"], [1, "responsive-text"], [1, "text-light", "text-center", "tow-tables"], [1, "space-to-mobile"], [1, "table-striped", "table-dark", "rounded"], ["scope", "col"], ["height", "100", 4, "ngFor", "ngForOf"], [2, "padding", "2%"], ["height", "100"], ["scope", "row"], [1, "text-center"], [3, "src", "width", "height"], [3, "routerLink"], [1, "col"], [1, "btn", "btn-primary", 2, "margin-right", "5px", 3, "click"], [1, "d-flex", "justify-content-center", "text-danger"], [1, "d-flex", "justify-content-center"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Products Of The Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_tr_23_Template, 16, 11, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "New Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, HomeComponent_tr_41_Template, 15, 10, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx.username, " To KSPlay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.discounted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.newProducts);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".mainContainer[_ngcontent-%COMP%]{\r\n    padding:1%;\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n}\r\nh5[_ngcontent-%COMP%]{\r\n    padding: 5px 20px;\r\n    background-color: #292b2c;\r\n    border-radius: 10px;\r\n}\r\ndiv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    margin: 1%;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    color:inherit;\r\n    text-decoration: none;\r\n}\r\n.page[_ngcontent-%COMP%]{\r\n    height: 130vh;\r\n}\r\n.tow-tables[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n    display: flex;\r\n}\r\n.location-nav[_ngcontent-%COMP%]{\r\n    top: 190vh;\r\n}\r\n\r\n@media only screen\r\n    and (min-width: 375px) \r\n    and (max-width: 898px) {\r\n        .tow-tables[_ngcontent-%COMP%]{\r\n            justify-content: center;\r\n            display: flex;\r\n            flex-wrap: wrap;\r\n            padding: 1%;\r\n\r\n        }\r\n        .tow-tables[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n            padding: 0;\r\n            margin: 0;\r\n        }\r\n        .tow-tables[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n            padding: 1;\r\n            margin: 0;\r\n        }\r\n        .page[_ngcontent-%COMP%]{\r\n            height: 145vh;\r\n        }\r\n        .responsive-text[_ngcontent-%COMP%]{\r\n            font-size: x-large;\r\n        }\r\n        .space-to-mobile[_ngcontent-%COMP%]{\r\n            margin-left: 15%;\r\n            margin-right: 15%;\r\n        }\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBLGFBQWE7QUFDYjs7O1FBR1E7WUFDSSx1QkFBdUI7WUFDdkIsYUFBYTtZQUNiLGVBQWU7WUFDZixXQUFXOztRQUVmO1FBQ0E7WUFDSSxVQUFVO1lBQ1YsU0FBUztRQUNiO1FBQ0E7WUFDSSxVQUFVO1lBQ1YsU0FBUztRQUNiO1FBQ0E7WUFDSSxhQUFhO1FBQ2pCO1FBQ0E7WUFDSSxrQkFBa0I7UUFDdEI7UUFDQTtZQUNJLGdCQUFnQjtZQUNoQixpQkFBaUI7UUFDckI7SUFDSiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6MSU7XHJcbn1cclxudGgsdGR7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmg1e1xyXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyYjJjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5kaXYgZGl2e1xyXG4gICAgbWFyZ2luOiAxJTtcclxufVxyXG5he1xyXG4gICAgY29sb3I6aW5oZXJpdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4ucGFnZXtcclxuICAgIGhlaWdodDogMTMwdmg7XHJcbn1cclxuLnRvdy10YWJsZXN7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmxvY2F0aW9uLW5hdntcclxuICAgIHRvcDogMTkwdmg7XHJcbn1cclxuLypmb3IgbW9iaWxlKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuXHJcbiAgICBhbmQgKG1pbi13aWR0aDogMzc1cHgpIFxyXG4gICAgYW5kIChtYXgtd2lkdGg6IDg5OHB4KSB7XHJcbiAgICAgICAgLnRvdy10YWJsZXN7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDElO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvdy10YWJsZXMgdGR7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvdy10YWJsZXMgdGh7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhZ2V7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTQ1dmg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZXNwb25zaXZlLXRleHR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNwYWNlLXRvLW1vYmlsZXtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BkeJ":
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.service */ "jOXV");



class CartService {
    constructor(products) {
        this.products = products;
        this.cart = []; // [product,amount]
        this.total = 0;
    }
    getCart() {
        return this.cart;
    }
    getTotal() {
        return this.total;
    }
    emptyCart() {
        this.cart = [];
        this.total = 0;
    }
    addItem(serialNumber) {
        let item = this.searchCart(serialNumber);
        if (item == null)
            this.cart.push([this.products.getBySerial(serialNumber), 1]);
        else
            item[1]++;
        this.total += this.cart[this.cart.length - 1][0].price;
    }
    removeItem(serialNumber) {
        let item = this.searchCart(serialNumber);
        this.total -= this.cart[this.cart.length - 1][0].price;
        if (item == null)
            return;
        else if (item[1] > 1)
            item[1]--;
        else
            this.cart.splice(this.getIndex(item), 1);
    }
    isEmpty() {
        return this.total == 0;
    }
    searchCart(serialNumber) {
        for (let tmp of this.cart)
            if (tmp[0].serialNumber == serialNumber)
                return tmp;
        return null;
    }
    getIndex(tmp) {
        for (let ind = 0; ind < this.cart.length; ind++)
            if (this.cart[ind] == tmp)
                return ind;
        return -1;
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"])); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'angularProject';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "U0XV":
/*!**********************************!*\
  !*** ./src/app/users.service.ts ***!
  \**********************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UsersService {
    constructor() {
        this.users = [
            { name: "admin", password: "admin" },
            { name: "user", password: "user" }
        ];
    }
    searchUser(email, password) {
        for (let tmp of this.users)
            if (tmp.name == email && tmp.name == password) {
                return tmp;
            }
        return null;
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products/products.component */ "ziXE");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contacts/contacts.component */ "iZNs");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-item/product-item.component */ "nXb/");
/* harmony import */ var _products_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./products/sidebar/sidebar.component */ "hibB");
/* harmony import */ var _products_list_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./products/list/list.component */ "7wYD");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"],
        _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_10__["ContactsComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
        _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_13__["ProductItemComponent"],
        _products_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
        _products_list_list_component__WEBPACK_IMPORTED_MODULE_15__["ListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                    _products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
                    _cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"],
                    _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_10__["ContactsComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                    _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_13__["ProductItemComponent"],
                    _products_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
                    _products_list_list_component__WEBPACK_IMPORTED_MODULE_15__["ListComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "c2A7":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart.service */ "BkeJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products.service */ "jOXV");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");








function CartComponent_div_12_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u20AA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1[0].price * item_r1[1]);
} }
function CartComponent_div_12_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "del", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1[0].price * 1.2 * item_r1[1], "\u20AA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1[0].price * item_r1[1], "\u20AA ");
} }
const _c0 = function (a1) { return ["/products", a1]; };
function CartComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CartComponent_div_12_ng_container_13_Template, 5, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CartComponent_div_12_ng_template_14_Template, 3, 2, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_12_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.addItem(item_r1[0].serialNumber); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_12_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r1 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.removeItem(item_r1[0].serialNumber); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1[0].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("width", item_r1[0].category == "Consoles" ? "120" : "80");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, item_r1[0].serialNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Serial Number: ", item_r1[0].serialNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isDiscounted(item_r1[0].serialNumber))("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1[1]);
} }
class CartComponent {
    constructor(cart, router, products) {
        this.cart = cart;
        this.router = router;
        this.products = products;
    }
    ngOnInit() {
        this.items = this.cart.getCart();
        this.discount = this.products.getDiscounted();
    }
    getTotal() {
        return this.cart.getTotal();
    }
    emptyCart() {
        if (this.cart.isEmpty())
            return;
        this.cart.emptyCart();
        alert("Items bought");
        this.router.navigate(['/home']);
    }
    addItem(serialNumber) {
        this.cart.addItem(serialNumber);
    }
    removeItem(serialNumber) {
        this.cart.removeItem(serialNumber);
    }
    getTotalItems() {
        let res = 0;
        for (let tmp of this.items)
            res += tmp[1];
        return res;
    }
    isDiscounted(serialNumber) {
        for (let tmp of this.discount)
            if (tmp.serialNumber == serialNumber)
                return true;
        return false;
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 27, vars: 3, consts: [[1, "page"], ["href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"), "rel", "stylesheet", "id", "bootstrap-css"], [1, "container"], [1, "card", "shopping-cart"], [1, "card-header", "bg-dark", "text-light"], ["aria-hidden", "true", 1, "fa", "fa-shopping-cart"], ["routerLink", "/home", 1, "btn", "btn-outline-info", "btn-sm", "pull-right"], [1, "clearfix"], [1, "card-body"], ["class", "row", "style", "margin-bottom: 10px;", 4, "ngFor", "ngForOf"], [1, "card-footer"], [1, "pull-right", 2, "margin", "10px"], [1, "btn", "btn-success", "pull-right", 3, "click"], [1, "pull-right", 2, "margin", "5px"], [1, "row", 2, "margin-bottom", "10px"], [1, "col-12", "col-sm-12", "col-md-2", "text-center"], ["alt", "prewiew", "height", "80", 1, "img-responsive", 3, "src", "width"], [1, "col-12", "text-sm-center", "col-sm-12", "text-md-left", "col-md-6"], [1, "text-dark", 3, "routerLink"], [1, "product-name"], [1, "muted"], [1, "col-12", "col-sm-12", "text-sm-center", "col-md-4", "text-md-right", "row"], [1, "col-3", "col-sm-3", "col-md-6", "text-md-right", 2, "padding-top", "5px"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "col-4", "col-sm-4", "col-md-4"], [1, "quantity"], [1, "plus", 3, "click"], ["type", "text", "title", "Qty", "size", "4", "readonly", "", 1, "qty", 3, "value"], [1, "minus", 3, "click"], [1, "text-muted"], [1, "d-inline", "text-danger"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Shipping cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Continue shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CartComponent_div_12_Template, 24, 10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_button_click_15_listener() { return ctx.emptyCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Total Items: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Total Price: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u20AA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getTotalItems());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getTotal());
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".quantity[_ngcontent-%COMP%] {\r\n    float: left;\r\n    margin-right: 15px;\r\n    background-color: #eee;\r\n    position: relative;\r\n    width: 80px;\r\n    overflow: hidden\r\n}\r\n\r\n.quantity[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    text-align: center;\r\n    width: 15px;\r\n    height: 15px;\r\n    padding: 0;\r\n    float: right;\r\n    color: #000;\r\n    font-size: 20px;\r\n    border: 0;\r\n    outline: 0;\r\n    background-color: #F6F6F6\r\n}\r\n\r\n.quantity[_ngcontent-%COMP%]   input.qty[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    border: 0;\r\n    width: 100%;\r\n    height: 40px;\r\n    padding: 10px 25px 10px 10px;\r\n    text-align: center;\r\n    font-weight: 400;\r\n    font-size: 15px;\r\n    border-radius: 0;\r\n    background-clip: padding-box\r\n}\r\n\r\n.quantity[_ngcontent-%COMP%]   .minus[_ngcontent-%COMP%], .quantity[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%] {\r\n    line-height: 0;\r\n    background-clip: padding-box;\r\n    border-radius: 0;\r\n    color: #bbb;\r\n    font-size: 20px;\r\n    position: absolute;\r\n    height: 50%;\r\n    border: 0;\r\n    right: 0;\r\n    padding: 0;\r\n    width: 25px;\r\n    z-index: 3\r\n}\r\n\r\n.quantity[_ngcontent-%COMP%]   .minus[_ngcontent-%COMP%]:hover, .quantity[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%]:hover {\r\n    background-color: #dad8da\r\n}\r\n\r\n.quantity[_ngcontent-%COMP%]   .minus[_ngcontent-%COMP%] {\r\n    bottom: 0\r\n}\r\n\r\n.shopping-cart[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n}\r\n\r\n.page[_ngcontent-%COMP%]{\r\n   height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtJQUNWO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkLDRCQUE0QjtJQUc1QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7R0FDRyxhQUFhO0FBQ2hCIiwiZmlsZSI6ImNhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLnF1YW50aXR5IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxyXG59XHJcblxyXG4ucXVhbnRpdHkgaW5wdXQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNlxyXG59XHJcblxyXG4ucXVhbnRpdHkgaW5wdXQucXR5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyNXB4IDEwcHggMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveFxyXG59XHJcblxyXG4ucXVhbnRpdHkgLm1pbnVzLCAucXVhbnRpdHkgLnBsdXMge1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGNvbG9yOiAjYmJiO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIHotaW5kZXg6IDNcclxufVxyXG5cclxuLnF1YW50aXR5IC5taW51czpob3ZlciwgLnF1YW50aXR5IC5wbHVzOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWQ4ZGFcclxufVxyXG5cclxuLnF1YW50aXR5IC5taW51cyB7XHJcbiAgICBib3R0b206IDBcclxufVxyXG4uc2hvcHBpbmctY2FydCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5wYWdle1xyXG4gICBoZWlnaHQ6IDEwMHZoO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.css']
            }]
    }], function () { return [{ type: _cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 15, vars: 0, consts: [[1, "bg-dark", "text-center", "text-white"], [1, "container", "p-4", "pb-0"], [1, "mb-4"], ["href", "https://www.facebook.com/nativ1600", "target", "self", "role", "button", 1, "btn", "btn-outline-light", "btn-floating", "m-1"], [1, "fa", "fa-facebook-f"], ["href", "mailto:nativma22@gmail.com", "target", "self", "role", "button", 1, "btn", "btn-outline-light", "btn-floating", "m-1"], [1, "fa", "fa-envelope"], ["href", "https://www.instagram.com/nativ_maatuk/", "role", "button", 1, "btn", "btn-outline-light", "btn-floating", "m-1"], [1, "fa", "fa-instagram"], ["href", "https://www.linkedin.com/in/nativ-maatuk-a61308214/", "target", "self", "role", "button", 1, "btn", "btn-outline-light", "btn-floating", "m-1"], [1, "fa", "fa-linkedin"], ["href", "https://github.com/NativMaatuk", "target", "self", "role", "button", 1, "btn", "btn-outline-light", "btn-floating", "m-1"], [1, "fa", "fa-github"], [1, "text-center", "p-3", 2, "background-color", "rgba(0, 0, 0, 0.2)"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u00A9 2021 Copyright: Nativ Maatuk ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%]{\r\n    bottom: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVye1xyXG4gICAgYm90dG9tOiAwO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hibB":
/*!*******************************************************!*\
  !*** ./src/app/products/sidebar/sidebar.component.ts ***!
  \*******************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SidebarComponent {
    constructor() {
        this.showChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.show = "all";
    }
    all() {
        this.show = "all";
        this.showChange.emit(this.show);
    }
    consoles() {
        this.show = "Consoles";
        this.showChange.emit(this.show);
    }
    videoGames() {
        this.show = "Games";
        this.showChange.emit(this.show);
    }
    PSGames() {
        this.show = "PS Games";
        this.showChange.emit(this.show);
    }
    PCGames() {
        this.show = "PC Games";
        this.showChange.emit(this.show);
    }
    XBOXGames() {
        this.show = "XBOX Games";
        this.showChange.emit(this.show);
    }
    NintendoGames() {
        this.show = "Nintendo Games";
        this.showChange.emit(this.show);
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], outputs: { showChange: "showChange" }, decls: 31, vars: 0, consts: [["id", "carouselExampleControls", "data-ride", "carousel", 1, "custom-carousel", "carousel", "slide", "p-4"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "nav-link", 3, "click"], [1, "carousel-item"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_3_listener() { return ctx.all(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "All Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_6_listener() { return ctx.consoles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Consoles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_9_listener() { return ctx.videoGames(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "All Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_12_listener() { return ctx.PSGames(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Playstation Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_15_listener() { return ctx.XBOXGames(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "XBOX Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_18_listener() { return ctx.NintendoGames(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Nintendo Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_21_listener() { return ctx.PCGames(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "PC Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".nav-link[_ngcontent-%COMP%]{\r\n  color: antiquewhite;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n}\r\n.custom-carousel[_ngcontent-%COMP%]{\r\n  width: 400px;\r\n  text-align: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGlua3tcclxuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmN1c3RvbS1jYXJvdXNlbHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css']
            }]
    }], function () { return []; }, { showChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "iZNs":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");




class ContactsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(); };
ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 19, vars: 0, consts: [[1, "page"], [1, "d-flex", "p-2", "col-example", "d-flex", "justify-content-center"], [2, "margin", "1%"], [1, "col-lg-16"], [1, "text-center", "card-box"], [1, "member-card", "pt-2", "pb-2"], [1, "thumb-lg", "member-thumb", "mx-auto"], ["src", "https://screenshots.gamebanana.com/img/ico/sprays/patrick.png", 1, "rounded-circle", "img-thumbnail"], [1, ""], [1, "text-info"], ["href", "mailto:nativma22@gmail.com", 1, "text-pink"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nativ Matuk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Software Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "nativma22@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["body[_ngcontent-%COMP%]{\r\n    background:#DCDCDC;\r\n    margin-top:20px;\r\n}\r\n.card-box[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    border-radius: 3px;\r\n    margin-bottom: 30px;\r\n    background-color: #fff;\r\n}\r\n.social-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n    color: rgba(121, 121, 121, .8);\r\n    display: inline-block;\r\n    height: 30px;\r\n    line-height: 27px;\r\n    border: 2px solid rgba(121, 121, 121, .5);\r\n    text-align: center;\r\n    width: 30px\r\n}\r\n.social-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #797979;\r\n    border: 2px solid #797979\r\n}\r\n.thumb-lg[_ngcontent-%COMP%] {\r\n    height: 88px;\r\n    width: 88px;\r\n}\r\n.img-thumbnail[_ngcontent-%COMP%] {\r\n    padding: .25rem;\r\n    background-color: #fff;\r\n    border: 1px solid #dee2e6;\r\n    border-radius: .25rem;\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n.text-pink[_ngcontent-%COMP%] {\r\n    color: #ff679b!important;\r\n}\r\n.btn-rounded[_ngcontent-%COMP%] {\r\n    border-radius: 2em;\r\n}\r\n.text-muted[_ngcontent-%COMP%] {\r\n    color: #98a6ad!important;\r\n}\r\nh4[_ngcontent-%COMP%] {\r\n    line-height: 22px;\r\n    font-size: 18px;\r\n}\r\n.page[_ngcontent-%COMP%]{\r\n    height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHlDQUF5QztJQUN6QyxrQkFBa0I7SUFDbEI7QUFDSjtBQUVBO0lBQ0ksY0FBYztJQUNkO0FBQ0o7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoiY29udGFjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kOiNEQ0RDREM7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxuLmNhcmQtYm94IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnNvY2lhbC1saW5rcyBsaSBhIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiByZ2JhKDEyMSwgMTIxLCAxMjEsIC44KTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMjEsIDEyMSwgMTIxLCAuNSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzBweFxyXG59XHJcblxyXG4uc29jaWFsLWxpbmtzIGxpIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICM3OTc5Nzk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNzk3OTc5XHJcbn1cclxuLnRodW1iLWxnIHtcclxuICAgIGhlaWdodDogODhweDtcclxuICAgIHdpZHRoOiA4OHB4O1xyXG59XHJcbi5pbWctdGh1bWJuYWlsIHtcclxuICAgIHBhZGRpbmc6IC4yNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi50ZXh0LXBpbmsge1xyXG4gICAgY29sb3I6ICNmZjY3OWIhaW1wb3J0YW50O1xyXG59XHJcbi5idG4tcm91bmRlZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbn1cclxuLnRleHQtbXV0ZWQge1xyXG4gICAgY29sb3I6ICM5OGE2YWQhaW1wb3J0YW50O1xyXG59XHJcbmg0IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5wYWdle1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacts',
                templateUrl: './contacts.component.html',
                styleUrls: ['./contacts.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jOXV":
/*!*************************************!*\
  !*** ./src/app/products.service.ts ***!
  \*************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProductsService {
    constructor() { }
    getProducts() {
        return this.getConsoles().concat(this.getGames());
    }
    getConsoles() {
        return [
            new Product("101", "Playstation 5", 2000, "Consoles", "The PlayStation 5's main features include a solid-state drive customized for high-speed data streaming to enable significant improvements in storage performance, an AMD GPU capable of 4K resolution display at up to 120 frames per second, hardware-accelerated ray tracing for realistic lighting and reflections, the Tempest Engine allowing for 3D audio effects, and backward compatibility with most PlayStation 4 and PlayStation VR games.", "https://cdn.mos.cms.futurecdn.net/EzvyUp3JuzUc47ae7kotHk.jpg"),
            new Product("102", "Playstation 4 Pro", 1850, "Consoles", "The most advanced PlayStation system ever. PS4 Pro is designed to take your favorite PS4 games and add to them with more power for graphics, performance, or features for your 4K HDR TV, or 1080p HD TV. ... For HD TV Enhanced games, players can benefit from increased image clarity, faster frame rates, or more.", "https://gmedia.playstation.com/is/image/SIEPDC/ps4-pro-console-02-en-26oct18?$native--t$"),
            new Product("103", "XBOX One X", 1950, "Consoles", "The Xbox One X's headlining features, though, are its support for 4K and its HDR gaming at up to 60 frames per second. If a given game supports all of that, it should be sharper (via 4K), look more lifelike (via HDR10), and run smoother (via the higher frame rate) than it does on other consoles.", "https://www.dolby.com/siteassets/xf-products/xbox-one-x/xbox-one-x.png"),
            new Product("104", "XBOX One S", 1200, "Consoles", "The good The Xbox One S is a slick looking game console that's 40 percent smaller than the original and ditches the infamously gigantic power brick. It can display 4K video from streaming services and Ultra HD Blu-rays, and supports HDR contrast on video and games.", "https://d2skuhm0vrry40.cloudfront.net/2015/articles/1/8/3/7/5/3/4/xbox-one-s-everything-you-need-to-know-about-the-slim-console-1465927049068.jpg/EG11/resize/1200x-1/xbox-one-s-everything-you-need-to-know-about-the-slim-console-1465927049068.jpg"),
            new Product("105", "Nintendo Switch", 1450, "Consoles", "The Nintendo Switch system transforms from home console to handheld, letting you play your favorite games at home or on the go. It includes a dock for connecting to your TV, as well as removable Joy-Con™ controllers that you can share with a friend for two-player fun.", "https://upload.wikimedia.org/wikipedia/commons/7/76/Nintendo-Switch-Console-Docked-wJoyConRB.jpg")
        ];
    }
    getGames() {
        return this.getPSGames().concat(this.getXBOXGames()).concat(this.getPCGames()).concat(this.getNintendoGames());
    }
    getPSGames() {
        return [
            new Product("201", "FIFA 21", 250, "PS Games", "FIFA 21 is a football simulation video game published by Electronic Arts as part of the FIFA series. It is the 28th installment in the FIFA series, and was released 9 October 2020 for Microsoft Windows, Nintendo Switch, PlayStation 4 and Xbox One.", "https://www.fifplay.com/img/public/fifa-21-cover-standard-edition.jpg"),
            new Product("202", "DEATH STRANDING", 180, "PS Games", "Death Stranding is an action game developed by Kojima Productions. It is the first game from director Hideo Kojima and Kojima Productions after their split from Konami in 2015. The game is set in the United States following a cataclysmic event which caused destructive creatures to begin roaming the Earth.", "https://images-na.ssl-images-amazon.com/images/I/61L0yZsbzxL._SX385_.jpg"),
            new Product("203", "Ghost of Tsushima", 220, "PS Games", "Ghost of Tsushima is an action-adventure stealth game played from a third-person perspective. The game features a large open world, without waypoints, which can be explored without guidance. Players can travel to different parts of the world on horseback.", "https://cdn11.bigcommerce.com/s-boldppk8jp/images/stencil/1280x1280/products/1418/1185/Ghost-of-tsushima-PS4-Cover_Compressed__34495.1595229890.jpg?c=1"),
            new Product("204", "Bloodborne", 150, "PS Games", "Bloodborne is an action role-playing game developed by FromSoftware and published by Sony Computer Entertainment, which released for the PlayStation 4 in March 2015.", "https://static.raru.co.za/cover/2015/10/13/3132923-l.jpg?v=1444822107"),
            new Product("205", "God of War", 120, "PS Games", "Based in ancient mythology, the story follows Kratos, a Spartan warrior who was tricked into killing his family by his former master, the Greek God of War Ares.", "https://images-na.ssl-images-amazon.com/images/I/711lrrvzt%2BL._SL1496_.jpg")
        ];
    }
    getPCGames() {
        return [
            new Product("301", "Crusader Kings 3", 200, "PC Games", "Crusader Kings III is the heir to a long legacy of historical grand strategy experiences and arrives with a host of new ways to ensure the success of your royal house. Choose a royal or noble house from a number of realms on a map that stretches from Iceland to India, from the Arctic Circle to Central Africa.", "https://static2.raru.co.za/cover/2020/07/29/8167758-l.jpg?v=1596007461"),
            new Product("302", "Cyberpunk 2077", 180, "PC Games", "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. ... You can customize your character's cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.", "https://www.exongames.co.il/wp-content/uploads/2019/07/cyberpunk-2077-box-art-01-ps4-06jun19-en-us.jpg"),
            new Product("303", "Divinity: Original Sin II", 220, "PC Games", "The game is set on the fantasy world of Rivellon, centuries after Divinity: Original Sin. Living beings on Rivellon have a form of energy known as Source, and individuals called Sourcerers can manipulate Source to cast spells or enhance their combat abilities.", "https://cdn-prod.scalefast.com/public/assets/user/6562614/image/fc0fea76b4a2f75dc282d0dba05a31a1.jpg"),
            new Product("304", "Diablo 3", 120, "PC Games", "Diablo III is a hack-and-slash action role-playing game developed and published by Blizzard Entertainment as the third installment in the Diablo franchise.", "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Diablo_III_cover.png/220px-Diablo_III_cover.png"),
            new Product("305", "Bioshock Infinite", 80, "PC Games", "BioShock Infinite is set in 1912 and takes place in a fictional steampunk city-state called \"Columbia\"—named in homage to the female personification of the United States—which is suspended in the air through a combination of giant blimps, balloons, reactors, propellers, and \"quantum levitation\".", "https://upload.wikimedia.org/wikipedia/en/a/a3/Official_cover_art_for_Bioshock_Infinite.jpg")
        ];
    }
    getXBOXGames() {
        return [
            new Product("401", "TESV Skyrim Remastered", 150, "XBOX Games", "The Elder Scrolls V: Skyrim is an action role-playing game, playable from either a first or third-person perspective. The player may freely roam over the land of Skyrim which is an open world environment consisting of wilderness expanses, dungeons, caves, cities, towns, fortresses, and villages.", "https://media.gamestop.com/i/gamestop/10131511/The-Elder-Scrolls-V-Skyrim-Special-Edition"),
            new Product("402", "Halo Collection ", 200, "XBOX Games", "Halo: The Master Chief Collection is a compilation of first-person shooter video games in the Halo series.", "https://www.yambalu.com/img/juegos/portadas/6781_2_halo_the_master_chief_collection_xbox_one_xxxl.jpg"),
            new Product("403", "Forza Horizon 4", 230, "XBOX Games", "Live the Horizon Life when you play Forza Horizon 4. Experience a shared world with dynamic seasons.", "https://cdn-products.eneba.com/resized-products/6cuhdDBs7iBJ1bJXuR7iVuLC-RkTlh4oBtNSmDijbJQ_350x200_2x-0.jpeg"),
            new Product("404", "Minecraft", 120, "XBOX Games", "In Minecraft, players explore a blocky, procedurally-generated 3D world with infinite terrain, and may discover and extract raw materials, craft tools and items.", "https://images.g2a.com/newlayout/323x433/1x1x0/9959c6b29917/5c3f3e82ae653a48c1748ee5"),
            new Product("405", "DOOM Eternal", 180, "XBOX Games", "Doom Eternal is a first-person shooter game developed by id Software and published by Bethesda Softworks. ... Set some time after the events of the 2016 game, the story follows the Doom Slayer once again, on a mission to end Hell's consumption of Earth and foil the alien Maykrs' plans to exterminate humanity.", "https://images-na.ssl-images-amazon.com/images/I/81zVNA8JzhL._SL1500_.jpg")
        ];
    }
    getNintendoGames() {
        return [
            new Product("501", "Dark Souls Remastered", 180, "Nintendo Games", "DARK SOULS: REMASTERED includes the main game plus the Artorias of the Abyss DLC. ... Gameplay Richness and Possibilities— Use hundreds of unique weapon, armor, magic, and crafting combinations to create your own playstyle and gaming experience.", "https://cashcow-cdn.azureedge.net/images/5e78a686-61ab-42f9-8c6b-0d14cf62e21e.jpg"),
            new Product("502", "Breath of the Wild", 220, "Nintendo Games", "Breath of the Wild is an action-adventure game set in an open world where players are tasked with exploring the kingdom of Hyrule while controlling Link. ... Link can procure items from the environment, including weapons, food, and other resources. Unlike previous Zelda games, weapons and shields degrade through use.", "https://i.pinimg.com/originals/2e/69/1b/2e691b07b0bee775e10423ced9adc3c6.jpg"),
            new Product("503", "Mario Odyssey", 150, "Nintendo Games", "Super Mario Odyssey is a platform game in which players control Mario as he travels across many different worlds, known as \"Kingdoms\" within the game, on the hat-shaped ship Odyssey, to rescue Princess Peach from Bowser, who plans to forcibly marry her.", "https://vgs.co.il/wp-content/uploads/2017/01/super-mario-odyssey-switch-cover.jpg"),
            new Product("504", "Pokemon Sword", 220, "Nintendo Games", "Pokémon Sword is one of the two latest Pokémon adventures. It takes place in the Galar region, which is inspired by the UK, and features three new starters, and brings back gym battles. Older Pokémon seem to make an appearance as well, so you'll see some of your favorites.", "https://vgs.co.il/wp-content/uploads/2019/02/pokemon-sword-cover.jpg"),
            new Product("505", "Mario Kart", 120, "Nintendo Games", "Mario Kart is a series of go-kart-style racing video games developed and published by Nintendo as spin-offs from its trademark Super Mario series. The games feature characters from the Mario franchise and other game series competing in races while using various items to gain advantage.", "https://static2.raru.co.za/cover/2017/01/14/5390386-l.jpg?v=1500110779")
        ];
    }
    getDiscounted() {
        let res = [];
        let arr = this.getProducts();
        res.push(arr[20]);
        res.push(arr[7]);
        res.push(arr[10]);
        res.push(arr[3]);
        res.push(arr[6]);
        return res;
    }
    getNew() {
        let res = [];
        let arr = this.getProducts();
        res.push(arr[0]);
        res.push(arr[12]);
        res.push(arr[15]);
        res.push(arr[5]);
        res.push(arr[17]);
        return res;
    }
    getBySerial(num) {
        let arr = this.getProducts();
        for (let tmp of arr)
            if (tmp.serialNumber == num)
                return tmp;
        return null;
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(); };
ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
class Product {
    constructor(serialNumber, name, price, category, description, img) {
        this.serialNumber = serialNumber;
        this.name = name;
        this.price = price;
        this.category = category;
        this.description = description;
        this.img = img;
    }
}


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart.service */ "BkeJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class NavbarComponent {
    constructor(cart) {
        this.cart = cart;
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 23, vars: 1, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["routerLink", "/home", 1, "navbar-brand"], ["src", "assets/logo.png", "height", "50", "width", "50"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/home", "routerLinkActive", "activeStyle", 1, "nav-link"], ["routerLink", "/products", "routerLinkActive", "activeStyle", 1, "nav-link"], ["routerLink", "/cart", "routerLinkActive", "activeStyle", 1, "nav-link"], ["routerLink", "/contacts", "routerLinkActive", "activeStyle", 1, "nav-link"], ["routerLink", "/login", "routerLinkActive", "activeStyle", 1, "btn", "btn-secondary", "float-right"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "KSPlay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cart (", ctx.cart.getTotal(), "\u20AA)");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".activeStyle[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZVN0eWxle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] }]; }, null); })();


/***/ }),

/***/ "nXb/":
/*!********************************************************!*\
  !*** ./src/app/product-item/product-item.component.ts ***!
  \********************************************************/
/*! exports provided: ProductItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function() { return ProductItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "jOXV");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "BkeJ");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ProductItemComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.product.price, "\u20AA ");
} }
function ProductItemComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "del", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.product.price * 1.2, "\u20AA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.product.price, "\u20AA ");
} }
class ProductItemComponent {
    constructor(router, route, products, cart) {
        this.router = router;
        this.route = route;
        this.products = products;
        this.cart = cart;
    }
    ngOnInit() {
        this.serialNumber = this.route.snapshot.params['serialNumber'];
        this.product = this.products.getBySerial(this.serialNumber);
        this.discount = this.products.getDiscounted();
        if (this.product == null)
            this.router.navigate(['/404']);
    }
    addItem() {
        this.cart.addItem(this.serialNumber);
    }
    isDiscounted(serialNumber) {
        for (let tmp of this.discount)
            if (tmp.serialNumber == serialNumber)
                return true;
        return false;
    }
}
ProductItemComponent.ɵfac = function ProductItemComponent_Factory(t) { return new (t || ProductItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
ProductItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductItemComponent, selectors: [["app-product-item"]], decls: 25, vars: 9, consts: [[1, "card-group", 2, "margin", "1%"], [1, "card", 2, "width", "18rem"], [1, "card-body"], [1, "card-title", "font-weight-bold"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "card-text"], [1, "btn", "btn-primary", "d-inline", 2, "margin-right", "5px", 3, "click"], [1, "d-inline"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [3, "src", "width", "height"], [1, "d-inline", "text-danger"]], template: function ProductItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Serial Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Category:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductItemComponent_Template_button_click_18_listener() { return ctx.addItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProductItemComponent_ng_container_21_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProductItemComponent_ng_template_22_Template, 3, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product.serialNumber, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product.category, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isDiscounted(ctx.product.serialNumber))("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.product.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("width", ctx.product.category == "Consoles" ? "450" : "250")("height", ctx.product.category == "Consoles" ? "250" : "350");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-item',
                templateUrl: './product-item.component.html',
                styleUrls: ['./product-item.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, null); })();


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");



class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 9, vars: 0, consts: [[1, "container", "bg-dark", "text-light"], [1, "row"], [1, "col-md-12"], [1, "error-template"], [1, "error-details"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " 404 Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Sorry, an error has occured, Requested page not found! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]], styles: [".container[_ngcontent-%COMP%]{\r\n    margin:20px;\r\n    padding:20px;\r\n    border-radius: 16px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbjoyMHB4O1xyXG4gICAgcGFkZGluZzoyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts/contacts.component */ "iZNs");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-item/product-item.component */ "nXb/");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products/products.component */ "ziXE");











const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: "home/:name", component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: "products", component: _products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"] },
    { path: "products/:serialNumber", component: _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_7__["ProductItemComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: "cart", component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"] },
    { path: "contacts", component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"] },
    { path: "**", component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users.service */ "U0XV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "BkeJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function LoginComponent_small_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid Username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(users, router, cart) {
        this.users = users;
        this.router = router;
        this.cart = cart;
    }
    ngOnInit() {
        this.cart.emptyCart();
    }
    onSubmit(form) {
        if (this.users.searchUser(form.value.name, form.value.password))
            this.router.navigate(['home', form.value.name]);
        else
            alert("Invalid Username or Password");
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 14, vars: 3, consts: [["autocomplete", "off", 1, "box", 3, "ngSubmit"], ["form", "ngForm"], ["src", "assets/logo.png", "height", "50", "width", "50"], [1, "form-group"], ["type", "text", "name", "name", "placeholder", "Username", "ngModel", "", "required", "", "minlength", "3", 1, "form-control"], ["name", "ngModel"], ["type", "password", "name", "password", "placeholder", "Password", "ngModel", "", "required", "", "minlength", "3", 1, "form-control"], ["password", "ngModel"], ["type", "submit", "value", "Login", 3, "disabled"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "KSPlay Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_small_11_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_small_13_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r1.valid && (_r1.dirty || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r2.valid && (_r2.dirty || _r2.touched));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".box[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n    padding: 40px;\r\n    background: #191919;\r\n    text-align: center;\r\n    transition: 0.25s;\r\n    margin-top: 80px;\r\n    border-radius: 16px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], .box[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n    border: 0;\r\n    background: none;\r\n    display: block;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    border: 2px solid #3498db;\r\n    padding: 10px 10px;\r\n    width: 250px;\r\n    outline: none;\r\n    border-radius: 24px;\r\n    transition: 0.25s\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    color: white;\r\n    text-transform: uppercase;\r\n    font-weight: 500\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\r\n    border: 0;\r\n    background: none;\r\n    display: block;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    border: 2px solid darkslateblue;\r\n    padding: 14px 40px;\r\n    outline: none;\r\n    color: white;\r\n    border-radius: 24px;\r\n    transition: 0.25s;\r\n    cursor: pointer\r\n}\r\n\r\n.box[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%]:hover {\r\n    background: darkslateblue\r\n}\r\n\r\n.forgot[_ngcontent-%COMP%] {\r\n    text-decoration: underline\r\n}\r\n\r\nul.social-network[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    display: inline;\r\n    margin-left: 0 !important;\r\n    padding: 0\r\n}\r\n\r\nul.social-network[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    margin: 0 5px\r\n}\r\n\r\n.social-network[_ngcontent-%COMP%]   a.icoFacebook[_ngcontent-%COMP%]:hover {\r\n    background-color: #3B5998\r\n}\r\n\r\n.social-network[_ngcontent-%COMP%]   a.icoTwitter[_ngcontent-%COMP%]:hover {\r\n    background-color: #33ccff\r\n}\r\n\r\n.social-network[_ngcontent-%COMP%]   a.icoGoogle[_ngcontent-%COMP%]:hover {\r\n    background-color: #BD3518\r\n}\r\n\r\n.social-network[_ngcontent-%COMP%]   a.icoFacebook[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .social-network[_ngcontent-%COMP%]   a.icoTwitter[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .social-network[_ngcontent-%COMP%]   a.icoGoogle[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\r\n    color: #fff\r\n}\r\n\r\na.socialIcon[_ngcontent-%COMP%]:hover, .socialHoverClass[_ngcontent-%COMP%] {\r\n    color: #44BCDD\r\n}\r\n\r\n.social-circle[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: relative;\r\n    margin: 0 auto 0 auto;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    width: 50px;\r\n    height: 50px;\r\n    font-size: 20px\r\n}\r\n\r\n.social-circle[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    line-height: 50px;\r\n    text-align: center\r\n}\r\n\r\n.social-circle[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .triggeredHover[_ngcontent-%COMP%] {\r\n    transform: rotate(360deg);\r\n    transition: all 0.2s\r\n}\r\n\r\n.social-circle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    transition: all 0.8s;\r\n    transition: all 0.8s\r\n}\r\n\r\n.ng-valid[required][_ngcontent-%COMP%]{\r\n    color:green;\r\n}\r\n\r\n.ng-dirty.ng-touched.ng-invalid[_ngcontent-%COMP%]{\r\n    color:yellow;\r\n}\r\n\r\n\r\n\r\n@media only screen\r\n    and (min-width: 375px) \r\n    and (max-width: 898px) {\r\n        .box[_ngcontent-%COMP%] {\r\n            height: 500px;\r\n            width: 350px;\r\n            padding: 40px;\r\n            background: #191919;\r\n            text-align: center;\r\n            transition: 0.25s;\r\n            margin-top: 60px;\r\n            border-radius: 16px;\r\n            justify-content: center;\r\n        }\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksU0FBUztJQUNULGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTs7O0lBR0k7QUFDSjs7QUFFQTs7SUFFSTtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCO0FBQ0o7O0FBR0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUNBLGFBQWE7O0FBQ2I7OztRQUdRO1lBQ0ksYUFBYTtZQUNiLFlBQVk7WUFDWixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixpQkFBaUI7WUFDakIsZ0JBQWdCO1lBQ2hCLG1CQUFtQjtZQUNuQix1QkFBdUI7UUFDM0I7SUFDSiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5ib3gge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICMxOTE5MTk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5ib3ggaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbi5ib3ggaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzM0OThkYjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4yNXNcclxufVxyXG5cclxuLmJveCBoMSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMFxyXG59XHJcblxyXG4uYm94IGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBkYXJrc2xhdGVibHVlO1xyXG4gICAgcGFkZGluZzogMTRweCA0MHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG59XHJcblxyXG4uYm94IGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogZGFya3NsYXRlYmx1ZVxyXG59XHJcblxyXG4uZm9yZ290IHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lXHJcbn1cclxuXHJcbnVsLnNvY2lhbC1uZXR3b3JrIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMFxyXG59XHJcblxyXG51bC5zb2NpYWwtbmV0d29yayBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBtYXJnaW46IDAgNXB4XHJcbn1cclxuXHJcbi5zb2NpYWwtbmV0d29yayBhLmljb0ZhY2Vib29rOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQjU5OThcclxufVxyXG5cclxuLnNvY2lhbC1uZXR3b3JrIGEuaWNvVHdpdHRlcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNjY2ZmXHJcbn1cclxuXHJcbi5zb2NpYWwtbmV0d29yayBhLmljb0dvb2dsZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkQzNTE4XHJcbn1cclxuXHJcbi5zb2NpYWwtbmV0d29yayBhLmljb0ZhY2Vib29rOmhvdmVyIGksXHJcbi5zb2NpYWwtbmV0d29yayBhLmljb1R3aXR0ZXI6aG92ZXIgaSxcclxuLnNvY2lhbC1uZXR3b3JrIGEuaWNvR29vZ2xlOmhvdmVyIGkge1xyXG4gICAgY29sb3I6ICNmZmZcclxufVxyXG5cclxuYS5zb2NpYWxJY29uOmhvdmVyLFxyXG4uc29jaWFsSG92ZXJDbGFzcyB7XHJcbiAgICBjb2xvcjogIzQ0QkNERFxyXG59XHJcblxyXG4uc29jaWFsLWNpcmNsZSBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4XHJcbn1cclxuXHJcbi5zb2NpYWwtY2lyY2xlIGxpIGkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuLnNvY2lhbC1jaXJjbGUgbGkgYTpob3ZlciBpLFxyXG4udHJpZ2dlcmVkSG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzXHJcbn1cclxuXHJcbi5zb2NpYWwtY2lyY2xlIGkge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC44cztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjhzXHJcbn1cclxuXHJcblxyXG4ubmctdmFsaWRbcmVxdWlyZWRde1xyXG4gICAgY29sb3I6Z3JlZW47XHJcbn1cclxuXHJcbi5uZy1kaXJ0eS5uZy10b3VjaGVkLm5nLWludmFsaWR7XHJcbiAgICBjb2xvcjp5ZWxsb3c7XHJcbn1cclxuLypmb3IgbW9iaWxlKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuXHJcbiAgICBhbmQgKG1pbi13aWR0aDogMzc1cHgpIFxyXG4gICAgYW5kIChtYXgtd2lkdGg6IDg5OHB4KSB7XHJcbiAgICAgICAgLmJveCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzE5MTkxOTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjI1cztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "ziXE":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "kWWo");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "hibB");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "7wYD");





class ProductsComponent {
    constructor() { }
    ngOnInit() {
        this.show = "all";
    }
    setShow(show) {
        this.show = show;
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 6, vars: 1, consts: [[2, "overflow-x", "hidden"], [3, "showChange"], [1, "row", "d-flex", "flex-row"], [1, "col"], [3, "show"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-sidebar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showChange", function ProductsComponent_Template_app_sidebar_showChange_2_listener($event) { return ctx.setShow($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]], styles: [".text-gray[_ngcontent-%COMP%] {\r\n    color: #aaa\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    height: 170px;\r\n    width: 140px\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%]{\r\n    max-width:100%;\r\n    position: sticky;\r\n    top: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiO0FBQ0o7O0FBQ0E7SUFDSSxjQUFjO0lBRWQsZ0JBQWdCO0lBQ2hCLE1BQU07QUFDViIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtZ3JheSB7XHJcbiAgICBjb2xvcjogI2FhYVxyXG59XHJcblxyXG5pbWcge1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxuICAgIHdpZHRoOiAxNDBweFxyXG59XHJcbi5zaWRlYmFye1xyXG4gICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map