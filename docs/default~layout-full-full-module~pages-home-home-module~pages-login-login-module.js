(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layout-full-full-module~pages-home-home-module~pages-login-login-module"],{

/***/ "PTRe":
/*!*********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js ***!
  \*********************************************************************************/
/*! exports provided: NzAutosizeDirective, NzInputDirective, NzInputGroupComponent, NzInputGroupSlotComponent, NzInputGroupWhitSuffixOrPrefixDirective, NzInputModule, NzTextareaCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzAutosizeDirective", function() { return NzAutosizeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzInputDirective", function() { return NzInputDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzInputGroupComponent", function() { return NzInputGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzInputGroupSlotComponent", function() { return NzInputGroupSlotComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzInputGroupWhitSuffixOrPrefixDirective", function() { return NzInputGroupWhitSuffixOrPrefixDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzInputModule", function() { return NzInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTextareaCountComponent", function() { return NzTextareaCountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/services */ "JwMs");














/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */










function NzInputGroupComponent_span_0_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 7);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r7.nzAddOnBeforeIcon)("template", ctx_r7.nzAddOnBefore);
} }
function NzInputGroupComponent_span_0_span_2_ng_template_1_Template(rf, ctx) { }
function NzInputGroupComponent_span_0_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzInputGroupComponent_span_0_span_2_ng_template_1_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-input-affix-wrapper-sm", ctx_r8.isSmall)("ant-input-affix-wrapper-lg", ctx_r8.isLarge);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function NzInputGroupComponent_span_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 7);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r9.nzAddOnAfterIcon)("template", ctx_r9.nzAddOnAfter);
} }
function NzInputGroupComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzInputGroupComponent_span_0_span_1_Template, 1, 2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzInputGroupComponent_span_0_span_2_Template, 2, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzInputGroupComponent_span_0_span_3_Template, 1, 2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.nzAddOnBefore || ctx_r0.nzAddOnBeforeIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isAffix)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.nzAddOnAfter || ctx_r0.nzAddOnAfterIcon);
} }
function NzInputGroupComponent_ng_template_1_ng_template_0_ng_template_0_Template(rf, ctx) { }
function NzInputGroupComponent_ng_template_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzInputGroupComponent_ng_template_1_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 9);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function NzInputGroupComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzInputGroupComponent_ng_template_1_ng_template_0_Template, 1, 1, "ng-template", 10);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.isAffix)("ngIfElse", _r5);
} }
function NzInputGroupComponent_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 13);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r13.nzPrefixIcon)("template", ctx_r13.nzPrefix);
} }
function NzInputGroupComponent_ng_template_3_ng_template_1_Template(rf, ctx) { }
function NzInputGroupComponent_ng_template_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 14);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r15.nzSuffixIcon)("template", ctx_r15.nzSuffix);
} }
function NzInputGroupComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzInputGroupComponent_ng_template_3_span_0_Template, 1, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzInputGroupComponent_ng_template_3_ng_template_1_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzInputGroupComponent_ng_template_3_span_2_Template, 1, 2, "span", 12);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.nzPrefix || ctx_r4.nzPrefixIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.nzSuffix || ctx_r4.nzSuffixIcon);
} }
function NzInputGroupComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
} }
const _c0 = ["*"];
const _c1 = ["nz-input-group-slot", ""];
function NzInputGroupSlotComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx_r0.icon);
} }
function NzInputGroupSlotComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.template);
} }
const _c2 = [[["textarea", "nz-input", ""]]];
const _c3 = ["textarea[nz-input]"];
class NzInputDirective {
    constructor(ngControl, renderer, elementRef, directionality) {
        this.ngControl = ngControl;
        this.directionality = directionality;
        this.nzBorderless = false;
        this.nzSize = 'default';
        this._disabled = false;
        this.disabled$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.dir = 'ltr';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        renderer.addClass(elementRef.nativeElement, 'ant-input');
    }
    get disabled() {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value != null && `${value}` !== 'false';
    }
    ngOnInit() {
        var _a, _b;
        if (this.ngControl) {
            (_a = this.ngControl.statusChanges) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(() => this.ngControl.disabled !== null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(() => {
                this.disabled$.next(this.ngControl.disabled);
            });
        }
        this.dir = this.directionality.value;
        (_b = this.directionality.change) === null || _b === void 0 ? void 0 : _b.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnChanges(changes) {
        const { disabled } = changes;
        if (disabled) {
            this.disabled$.next(this.disabled);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzInputDirective.ɵfac = function NzInputDirective_Factory(t) { return new (t || NzInputDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], 8)); };
NzInputDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NzInputDirective, selectors: [["input", "nz-input", ""], ["textarea", "nz-input", ""]], hostVars: 11, hostBindings: function NzInputDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", ctx.disabled || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-input-disabled", ctx.disabled)("ant-input-borderless", ctx.nzBorderless)("ant-input-lg", ctx.nzSize === "large")("ant-input-sm", ctx.nzSize === "small")("ant-input-rtl", ctx.dir === "rtl");
    } }, inputs: { nzBorderless: "nzBorderless", nzSize: "nzSize", disabled: "disabled" }, exportAs: ["nzInput"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
NzInputDirective.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
NzInputDirective.propDecorators = {
    nzBorderless: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzInputDirective.prototype, "nzBorderless", void 0);

class NzInputGroupWhitSuffixOrPrefixDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
}
NzInputGroupWhitSuffixOrPrefixDirective.ɵfac = function NzInputGroupWhitSuffixOrPrefixDirective_Factory(t) { return new (t || NzInputGroupWhitSuffixOrPrefixDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
NzInputGroupWhitSuffixOrPrefixDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NzInputGroupWhitSuffixOrPrefixDirective, selectors: [["nz-input-group", "nzSuffix", ""], ["nz-input-group", "nzPrefix", ""]] });
NzInputGroupWhitSuffixOrPrefixDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
class NzInputGroupComponent {
    constructor(focusMonitor, elementRef, cdr, directionality) {
        this.focusMonitor = focusMonitor;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.directionality = directionality;
        this.nzAddOnBeforeIcon = null;
        this.nzAddOnAfterIcon = null;
        this.nzPrefixIcon = null;
        this.nzSuffixIcon = null;
        this.nzSize = 'default';
        this.nzSearch = false;
        this.nzCompact = false;
        this.isLarge = false;
        this.isSmall = false;
        this.isAffix = false;
        this.isAddOn = false;
        this.focused = false;
        this.disabled = false;
        this.dir = 'ltr';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    updateChildrenInputSize() {
        if (this.listOfNzInputDirective) {
            this.listOfNzInputDirective.forEach(item => (item.nzSize = this.nzSize));
        }
    }
    ngOnInit() {
        var _a;
        this.focusMonitor
            .monitor(this.elementRef, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe(focusOrigin => {
            this.focused = !!focusOrigin;
            this.cdr.markForCheck();
        });
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngAfterContentInit() {
        this.updateChildrenInputSize();
        const listOfInputChange$ = this.listOfNzInputDirective.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this.listOfNzInputDirective));
        listOfInputChange$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(list => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(...[listOfInputChange$, ...list.map((input) => input.disabled$)]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(() => listOfInputChange$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(list => list.some((input) => input.disabled)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe(disabled => {
            this.disabled = disabled;
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        const { nzSize, nzSuffix, nzPrefix, nzPrefixIcon, nzSuffixIcon, nzAddOnAfter, nzAddOnBefore, nzAddOnAfterIcon, nzAddOnBeforeIcon } = changes;
        if (nzSize) {
            this.updateChildrenInputSize();
            this.isLarge = this.nzSize === 'large';
            this.isSmall = this.nzSize === 'small';
        }
        if (nzSuffix || nzPrefix || nzPrefixIcon || nzSuffixIcon) {
            this.isAffix = !!(this.nzSuffix || this.nzPrefix || this.nzPrefixIcon || this.nzSuffixIcon);
        }
        if (nzAddOnAfter || nzAddOnBefore || nzAddOnAfterIcon || nzAddOnBeforeIcon) {
            this.isAddOn = !!(this.nzAddOnAfter || this.nzAddOnBefore || this.nzAddOnAfterIcon || this.nzAddOnBeforeIcon);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzInputGroupComponent.ɵfac = function NzInputGroupComponent_Factory(t) { return new (t || NzInputGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], 8)); };
NzInputGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzInputGroupComponent, selectors: [["nz-input-group"]], contentQueries: function NzInputGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, NzInputDirective, 0);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.listOfNzInputDirective = _t);
    } }, hostVars: 40, hostBindings: function NzInputGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-input-group-compact", ctx.nzCompact)("ant-input-search-enter-button", ctx.nzSearch)("ant-input-search", ctx.nzSearch)("ant-input-search-rtl", ctx.dir === "rtl")("ant-input-search-sm", ctx.nzSearch && ctx.isSmall)("ant-input-search-large", ctx.nzSearch && ctx.isLarge)("ant-input-group-wrapper", ctx.isAddOn)("ant-input-group-wrapper-rtl", ctx.dir === "rtl")("ant-input-group-wrapper-lg", ctx.isAddOn && ctx.isLarge)("ant-input-group-wrapper-sm", ctx.isAddOn && ctx.isSmall)("ant-input-affix-wrapper", ctx.isAffix && !ctx.isAddOn)("ant-input-affix-wrapper-rtl", ctx.dir === "rtl")("ant-input-affix-wrapper-focused", ctx.isAffix && ctx.focused)("ant-input-affix-wrapper-disabled", ctx.isAffix && ctx.disabled)("ant-input-affix-wrapper-lg", ctx.isAffix && !ctx.isAddOn && ctx.isLarge)("ant-input-affix-wrapper-sm", ctx.isAffix && !ctx.isAddOn && ctx.isSmall)("ant-input-group", !ctx.isAffix && !ctx.isAddOn)("ant-input-group-rtl", ctx.dir === "rtl")("ant-input-group-lg", !ctx.isAffix && !ctx.isAddOn && ctx.isLarge)("ant-input-group-sm", !ctx.isAffix && !ctx.isAddOn && ctx.isSmall);
    } }, inputs: { nzAddOnBeforeIcon: "nzAddOnBeforeIcon", nzAddOnAfterIcon: "nzAddOnAfterIcon", nzPrefixIcon: "nzPrefixIcon", nzSuffixIcon: "nzSuffixIcon", nzSize: "nzSize", nzSearch: "nzSearch", nzCompact: "nzCompact", nzAddOnBefore: "nzAddOnBefore", nzAddOnAfter: "nzAddOnAfter", nzPrefix: "nzPrefix", nzSuffix: "nzSuffix" }, exportAs: ["nzInputGroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 7, vars: 2, consts: [["class", "ant-input-wrapper ant-input-group", 4, "ngIf", "ngIfElse"], ["noAddOnTemplate", ""], ["affixTemplate", ""], ["contentTemplate", ""], [1, "ant-input-wrapper", "ant-input-group"], ["nz-input-group-slot", "", "type", "addon", 3, "icon", "template", 4, "ngIf"], ["class", "ant-input-affix-wrapper", 3, "ant-input-affix-wrapper-sm", "ant-input-affix-wrapper-lg", 4, "ngIf", "ngIfElse"], ["nz-input-group-slot", "", "type", "addon", 3, "icon", "template"], [1, "ant-input-affix-wrapper"], [3, "ngTemplateOutlet"], [3, "ngIf", "ngIfElse"], ["nz-input-group-slot", "", "type", "prefix", 3, "icon", "template", 4, "ngIf"], ["nz-input-group-slot", "", "type", "suffix", 3, "icon", "template", 4, "ngIf"], ["nz-input-group-slot", "", "type", "prefix", 3, "icon", "template"], ["nz-input-group-slot", "", "type", "suffix", 3, "icon", "template"]], template: function NzInputGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzInputGroupComponent_span_0_Template, 4, 4, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzInputGroupComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzInputGroupComponent_ng_template_3_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NzInputGroupComponent_ng_template_5_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isAddOn)("ngIfElse", _r1);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], NzInputGroupSlotComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgTemplateOutlet"]]; }, encapsulation: 2, changeDetection: 0 });
NzInputGroupComponent.ctorParameters = () => [
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
NzInputGroupComponent.propDecorators = {
    listOfNzInputDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [NzInputDirective,] }],
    nzAddOnBeforeIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzAddOnAfterIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzPrefixIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzSuffixIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzAddOnBefore: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzAddOnAfter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzPrefix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzSuffix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzCompact: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzInputGroupComponent.prototype, "nzSearch", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzInputGroupComponent.prototype, "nzCompact", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzInputDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'input[nz-input],textarea[nz-input]',
                exportAs: 'nzInput',
                host: {
                    '[class.ant-input-disabled]': 'disabled',
                    '[class.ant-input-borderless]': 'nzBorderless',
                    '[class.ant-input-lg]': `nzSize === 'large'`,
                    '[class.ant-input-sm]': `nzSize === 'small'`,
                    '[attr.disabled]': 'disabled || null',
                    '[class.ant-input-rtl]': `dir=== 'rtl'`
                }
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { nzBorderless: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzInputGroupWhitSuffixOrPrefixDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: `nz-input-group[nzSuffix], nz-input-group[nzPrefix]`
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzInputGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'nz-input-group',
                exportAs: 'nzInputGroup',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                template: `
    <span class="ant-input-wrapper ant-input-group" *ngIf="isAddOn; else noAddOnTemplate">
      <span
        *ngIf="nzAddOnBefore || nzAddOnBeforeIcon"
        nz-input-group-slot
        type="addon"
        [icon]="nzAddOnBeforeIcon"
        [template]="nzAddOnBefore"
      ></span>
      <span
        *ngIf="isAffix; else contentTemplate"
        class="ant-input-affix-wrapper"
        [class.ant-input-affix-wrapper-sm]="isSmall"
        [class.ant-input-affix-wrapper-lg]="isLarge"
      >
        <ng-template [ngTemplateOutlet]="affixTemplate"></ng-template>
      </span>
      <span
        *ngIf="nzAddOnAfter || nzAddOnAfterIcon"
        nz-input-group-slot
        type="addon"
        [icon]="nzAddOnAfterIcon"
        [template]="nzAddOnAfter"
      ></span>
    </span>
    <ng-template #noAddOnTemplate>
      <ng-template [ngIf]="isAffix" [ngIfElse]="contentTemplate">
        <ng-template [ngTemplateOutlet]="affixTemplate"></ng-template>
      </ng-template>
    </ng-template>
    <ng-template #affixTemplate>
      <span *ngIf="nzPrefix || nzPrefixIcon" nz-input-group-slot type="prefix" [icon]="nzPrefixIcon" [template]="nzPrefix"></span>
      <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
      <span *ngIf="nzSuffix || nzSuffixIcon" nz-input-group-slot type="suffix" [icon]="nzSuffixIcon" [template]="nzSuffix"></span>
    </ng-template>
    <ng-template #contentTemplate>
      <ng-content></ng-content>
    </ng-template>
  `,
                host: {
                    '[class.ant-input-group-compact]': `nzCompact`,
                    '[class.ant-input-search-enter-button]': `nzSearch`,
                    '[class.ant-input-search]': `nzSearch`,
                    '[class.ant-input-search-rtl]': `dir === 'rtl'`,
                    '[class.ant-input-search-sm]': `nzSearch && isSmall`,
                    '[class.ant-input-search-large]': `nzSearch && isLarge`,
                    '[class.ant-input-group-wrapper]': `isAddOn`,
                    '[class.ant-input-group-wrapper-rtl]': `dir === 'rtl'`,
                    '[class.ant-input-group-wrapper-lg]': `isAddOn && isLarge`,
                    '[class.ant-input-group-wrapper-sm]': `isAddOn && isSmall`,
                    '[class.ant-input-affix-wrapper]': `isAffix && !isAddOn`,
                    '[class.ant-input-affix-wrapper-rtl]': `dir === 'rtl'`,
                    '[class.ant-input-affix-wrapper-focused]': `isAffix && focused`,
                    '[class.ant-input-affix-wrapper-disabled]': `isAffix && disabled`,
                    '[class.ant-input-affix-wrapper-lg]': `isAffix && !isAddOn && isLarge`,
                    '[class.ant-input-affix-wrapper-sm]': `isAffix && !isAddOn && isSmall`,
                    '[class.ant-input-group]': `!isAffix && !isAddOn`,
                    '[class.ant-input-group-rtl]': `dir === 'rtl'`,
                    '[class.ant-input-group-lg]': `!isAffix && !isAddOn && isLarge`,
                    '[class.ant-input-group-sm]': `!isAffix && !isAddOn && isSmall`
                }
            }]
    }], function () { return [{ type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { nzAddOnBeforeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzAddOnAfterIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzPrefixIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzSuffixIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzCompact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], listOfNzInputDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [NzInputDirective]
        }], nzAddOnBefore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzAddOnAfter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzPrefix: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzSuffix: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzAutosizeDirective {
    constructor(elementRef, ngZone, platform, resizeService) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.platform = platform;
        this.resizeService = resizeService;
        this.autosize = false;
        this.el = this.elementRef.nativeElement;
        this.maxHeight = null;
        this.minHeight = null;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.inputGap = 10;
    }
    set nzAutosize(value) {
        const isAutoSizeType = (data) => {
            return typeof data !== 'string' && typeof data !== 'boolean' && (!!data.maxRows || !!data.minRows);
        };
        if (typeof value === 'string' || value === true) {
            this.autosize = true;
        }
        else if (isAutoSizeType(value)) {
            this.autosize = true;
            this.minRows = value.minRows;
            this.maxRows = value.maxRows;
            this.maxHeight = this.setMaxHeight();
            this.minHeight = this.setMinHeight();
        }
    }
    resizeToFitContent(force = false) {
        this.cacheTextareaLineHeight();
        // If we haven't determined the line-height yet, we know we're still hidden and there's no point
        // in checking the height of the textarea.
        if (!this.cachedLineHeight) {
            return;
        }
        const textarea = this.el;
        const value = textarea.value;
        // Only resize if the value or minRows have changed since these calculations can be expensive.
        if (!force && this.minRows === this.previousMinRows && value === this.previousValue) {
            return;
        }
        const placeholderText = textarea.placeholder;
        // Reset the textarea height to auto in order to shrink back to its default size.
        // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
        // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
        // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
        // need to be removed temporarily.
        textarea.classList.add('nz-textarea-autosize-measuring');
        textarea.placeholder = '';
        let height = Math.round((textarea.scrollHeight - this.inputGap) / this.cachedLineHeight) * this.cachedLineHeight + this.inputGap;
        if (this.maxHeight !== null && height > this.maxHeight) {
            height = this.maxHeight;
        }
        if (this.minHeight !== null && height < this.minHeight) {
            height = this.minHeight;
        }
        // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
        textarea.style.height = `${height}px`;
        textarea.classList.remove('nz-textarea-autosize-measuring');
        textarea.placeholder = placeholderText;
        // On Firefox resizing the textarea will prevent it from scrolling to the caret position.
        // We need to re-set the selection in order for it to scroll to the proper position.
        if (typeof requestAnimationFrame !== 'undefined') {
            this.ngZone.runOutsideAngular(() => requestAnimationFrame(() => {
                const { selectionStart, selectionEnd } = textarea;
                // IE will throw an "Unspecified error" if we try to set the selection range after the
                // element has been removed from the DOM. Assert that the directive hasn't been destroyed
                // between the time we requested the animation frame and when it was executed.
                // Also note that we have to assert that the textarea is focused before we set the
                // selection range. Setting the selection range on a non-focused textarea will cause
                // it to receive focus on IE and Edge.
                if (!this.destroy$.isStopped && document.activeElement === textarea) {
                    textarea.setSelectionRange(selectionStart, selectionEnd);
                }
            }));
        }
        this.previousValue = value;
        this.previousMinRows = this.minRows;
    }
    cacheTextareaLineHeight() {
        if (this.cachedLineHeight >= 0 || !this.el.parentNode) {
            return;
        }
        // Use a clone element because we have to override some styles.
        const textareaClone = this.el.cloneNode(false);
        textareaClone.rows = 1;
        // Use `position: absolute` so that this doesn't cause a browser layout and use
        // `visibility: hidden` so that nothing is rendered. Clear any other styles that
        // would affect the height.
        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '0';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = '';
        // In Firefox it happens that textarea elements are always bigger than the specified amount
        // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
        // As a workaround that removes the extra space for the scrollbar, we can just set overflow
        // to hidden. This ensures that there is no invalid calculation of the line height.
        // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
        textareaClone.style.overflow = 'hidden';
        this.el.parentNode.appendChild(textareaClone);
        this.cachedLineHeight = textareaClone.clientHeight - this.inputGap;
        this.el.parentNode.removeChild(textareaClone);
        // Min and max heights have to be re-calculated if the cached line height changes
        this.maxHeight = this.setMaxHeight();
        this.minHeight = this.setMinHeight();
    }
    setMinHeight() {
        const minHeight = this.minRows && this.cachedLineHeight ? this.minRows * this.cachedLineHeight + this.inputGap : null;
        if (minHeight !== null) {
            this.el.style.minHeight = `${minHeight}px`;
        }
        return minHeight;
    }
    setMaxHeight() {
        const maxHeight = this.maxRows && this.cachedLineHeight ? this.maxRows * this.cachedLineHeight + this.inputGap : null;
        if (maxHeight !== null) {
            this.el.style.maxHeight = `${maxHeight}px`;
        }
        return maxHeight;
    }
    noopInputHandler() {
        // no-op handler that ensures we're running change detection on input events.
    }
    ngAfterViewInit() {
        if (this.autosize && this.platform.isBrowser) {
            this.resizeToFitContent();
            this.resizeService
                .subscribe()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
                .subscribe(() => this.resizeToFitContent(true));
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngDoCheck() {
        if (this.autosize && this.platform.isBrowser) {
            this.resizeToFitContent();
        }
    }
}
NzAutosizeDirective.ɵfac = function NzAutosizeDirective_Factory(t) { return new (t || NzAutosizeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_12__["NzResizeService"])); };
NzAutosizeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NzAutosizeDirective, selectors: [["textarea", "nzAutosize", ""]], hostAttrs: ["rows", "1"], hostBindings: function NzAutosizeDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function NzAutosizeDirective_input_HostBindingHandler() { return ctx.noopInputHandler(); });
    } }, inputs: { nzAutosize: "nzAutosize" }, exportAs: ["nzAutosize"] });
NzAutosizeDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_12__["NzResizeService"] }
];
NzAutosizeDirective.propDecorators = {
    nzAutosize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzAutosizeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'textarea[nzAutosize]',
                exportAs: 'nzAutosize',
                host: {
                    // Textarea elements that have the directive applied should have a single row by default.
                    // Browsers normally show two rows by default and therefore this limits the minRows binding.
                    rows: '1',
                    '(input)': 'noopInputHandler()'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"] }, { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_12__["NzResizeService"] }]; }, { nzAutosize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzInputGroupSlotComponent {
    constructor() {
        this.icon = null;
        this.type = null;
        this.template = null;
    }
}
NzInputGroupSlotComponent.ɵfac = function NzInputGroupSlotComponent_Factory(t) { return new (t || NzInputGroupSlotComponent)(); };
NzInputGroupSlotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzInputGroupSlotComponent, selectors: [["", "nz-input-group-slot", ""]], hostVars: 6, hostBindings: function NzInputGroupSlotComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-input-group-addon", ctx.type === "addon")("ant-input-prefix", ctx.type === "prefix")("ant-input-suffix", ctx.type === "suffix");
    } }, inputs: { icon: "icon", type: "type", template: "template" }, attrs: _c1, decls: 2, vars: 2, consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]], template: function NzInputGroupSlotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzInputGroupSlotComponent_i_0_Template, 1, 1, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzInputGroupSlotComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.template);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"]], encapsulation: 2, changeDetection: 0 });
NzInputGroupSlotComponent.propDecorators = {
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzInputGroupSlotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: '[nz-input-group-slot]',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                template: `
    <i nz-icon [nzType]="icon" *ngIf="icon"></i>
    <ng-container *nzStringTemplateOutlet="template">{{ template }}</ng-container>
  `,
                host: {
                    '[class.ant-input-group-addon]': `type === 'addon'`,
                    '[class.ant-input-prefix]': `type === 'prefix'`,
                    '[class.ant-input-suffix]': `type === 'suffix'`
                }
            }]
    }], function () { return []; }, { icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTextareaCountComponent {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nzMaxCharacterCount = 0;
        this.nzComputeCharacterCount = v => v.length;
        this.nzFormatter = (c, m) => `${c}` + (m > 0 ? `/${m}` : ``);
        this.configChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngAfterContentInit() {
        if (!this.nzInputDirective && Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])()) {
            throw new Error('[nz-textarea-count]: Could not find matching textarea[nz-input] child.');
        }
        if (this.nzInputDirective.ngControl) {
            const valueChanges = this.nzInputDirective.ngControl.valueChanges || rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(valueChanges, this.configChange$)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(() => this.nzInputDirective.ngControl.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(this.nzInputDirective.ngControl.value))
                .subscribe(value => {
                this.setDataCount(value);
            });
        }
    }
    setDataCount(value) {
        const inputValue = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["isNotNil"])(value) ? String(value) : '';
        const currentCount = this.nzComputeCharacterCount(inputValue);
        const dataCount = this.nzFormatter(currentCount, this.nzMaxCharacterCount);
        this.renderer.setAttribute(this.elementRef.nativeElement, 'data-count', dataCount);
    }
    ngOnDestroy() {
        this.configChange$.complete();
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTextareaCountComponent.ɵfac = function NzTextareaCountComponent_Factory(t) { return new (t || NzTextareaCountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
NzTextareaCountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzTextareaCountComponent, selectors: [["nz-textarea-count"]], contentQueries: function NzTextareaCountComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, NzInputDirective, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.nzInputDirective = _t.first);
    } }, hostAttrs: [1, "ant-input-textarea-show-count"], inputs: { nzMaxCharacterCount: "nzMaxCharacterCount", nzComputeCharacterCount: "nzComputeCharacterCount", nzFormatter: "nzFormatter" }, ngContentSelectors: _c3, decls: 1, vars: 0, template: function NzTextareaCountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
NzTextareaCountComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
NzTextareaCountComponent.propDecorators = {
    nzInputDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [NzInputDirective, { static: true },] }],
    nzMaxCharacterCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzComputeCharacterCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzFormatter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTextareaCountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'nz-textarea-count',
                template: `
    <ng-content select="textarea[nz-input]"></ng-content>
  `,
                host: {
                    class: 'ant-input-textarea-show-count'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, { nzMaxCharacterCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzComputeCharacterCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzFormatter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzInputDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [NzInputDirective, { static: true }]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzInputModule {
}
NzInputModule.ɵfac = function NzInputModule_Factory(t) { return new (t || NzInputModule)(); };
NzInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NzInputModule });
NzInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["PlatformModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzOutletModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NzInputModule, { declarations: function () { return [NzTextareaCountComponent, NzInputDirective, NzInputGroupComponent, NzAutosizeDirective, NzInputGroupSlotComponent, NzInputGroupWhitSuffixOrPrefixDirective]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["PlatformModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzOutletModule"]]; }, exports: function () { return [NzTextareaCountComponent, NzInputDirective, NzInputGroupComponent, NzAutosizeDirective, NzInputGroupWhitSuffixOrPrefixDirective]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    NzTextareaCountComponent,
                    NzInputDirective,
                    NzInputGroupComponent,
                    NzAutosizeDirective,
                    NzInputGroupSlotComponent,
                    NzInputGroupWhitSuffixOrPrefixDirective
                ],
                exports: [
                    NzTextareaCountComponent,
                    NzInputDirective,
                    NzInputGroupComponent,
                    NzAutosizeDirective,
                    NzInputGroupWhitSuffixOrPrefixDirective
                ],
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["PlatformModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzOutletModule"]]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-input.js.map

/***/ })

}]);
//# sourceMappingURL=default~layout-full-full-module~pages-home-home-module~pages-login-login-module.js.map