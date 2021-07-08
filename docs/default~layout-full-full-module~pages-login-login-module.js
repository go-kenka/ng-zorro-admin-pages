(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layout-full-full-module~pages-login-login-module"],{

/***/ "TaO5":
/*!************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-checkbox.js ***!
  \************************************************************************************/
/*! exports provided: NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxModule, NzCheckboxWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCheckboxComponent", function() { return NzCheckboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCheckboxGroupComponent", function() { return NzCheckboxGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCheckboxModule", function() { return NzCheckboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCheckboxWrapperComponent", function() { return NzCheckboxWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */






const _c0 = ["*"];
const _c1 = ["inputElement"];
const _c2 = ["nz-checkbox", ""];
function NzCheckboxGroupComponent_label_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzCheckedChange", function NzCheckboxGroupComponent_label_0_Template_label_nzCheckedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const o_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.onCheckedChange(o_r1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDisabled", o_r1.disabled || ctx_r0.nzDisabled)("nzChecked", o_r1.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](o_r1.label);
} }
class NzCheckboxWrapperComponent {
    constructor(renderer, elementRef) {
        this.nzOnChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.checkboxList = [];
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    addCheckbox(value) {
        this.checkboxList.push(value);
    }
    removeCheckbox(value) {
        this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
    }
    onChange() {
        const listOfCheckedValue = this.checkboxList.filter(item => item.nzChecked).map(item => item.nzValue);
        this.nzOnChange.emit(listOfCheckedValue);
    }
}
NzCheckboxWrapperComponent.ɵfac = function NzCheckboxWrapperComponent_Factory(t) { return new (t || NzCheckboxWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
NzCheckboxWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzCheckboxWrapperComponent, selectors: [["nz-checkbox-wrapper"]], outputs: { nzOnChange: "nzOnChange" }, exportAs: ["nzCheckboxWrapper"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzCheckboxWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
NzCheckboxWrapperComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
NzCheckboxWrapperComponent.propDecorators = {
    nzOnChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzCheckboxComponent {
    constructor(elementRef, nzCheckboxWrapperComponent, cdr, focusMonitor, directionality) {
        this.elementRef = elementRef;
        this.nzCheckboxWrapperComponent = nzCheckboxWrapperComponent;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.directionality = directionality;
        this.dir = 'ltr';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.onChange = () => { };
        this.onTouched = () => { };
        this.nzCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nzValue = null;
        this.nzAutoFocus = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzChecked = false;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-checkbox-wrapper');
    }
    hostClick(e) {
        e.preventDefault();
        this.focus();
        this.innerCheckedChange(!this.nzChecked);
    }
    innerCheckedChange(checked) {
        if (!this.nzDisabled) {
            this.nzChecked = checked;
            this.onChange(this.nzChecked);
            this.nzCheckedChange.emit(this.nzChecked);
            if (this.nzCheckboxWrapperComponent) {
                this.nzCheckboxWrapperComponent.onChange();
            }
        }
    }
    writeValue(value) {
        this.nzChecked = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this.nzDisabled = disabled;
        this.cdr.markForCheck();
    }
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    blur() {
        this.inputElement.nativeElement.blur();
    }
    ngOnInit() {
        var _a;
        this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then(() => this.onTouched());
            }
        });
        if (this.nzCheckboxWrapperComponent) {
            this.nzCheckboxWrapperComponent.addCheckbox(this);
        }
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngAfterViewInit() {
        if (this.nzAutoFocus) {
            this.focus();
        }
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
        if (this.nzCheckboxWrapperComponent) {
            this.nzCheckboxWrapperComponent.removeCheckbox(this);
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzCheckboxComponent.ɵfac = function NzCheckboxComponent_Factory(t) { return new (t || NzCheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzCheckboxWrapperComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], 8)); };
NzCheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzCheckboxComponent, selectors: [["", "nz-checkbox", ""]], viewQuery: function NzCheckboxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
    } }, hostVars: 4, hostBindings: function NzCheckboxComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzCheckboxComponent_click_HostBindingHandler($event) { return ctx.hostClick($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-checkbox-wrapper-checked", ctx.nzChecked)("ant-checkbox-rtl", ctx.dir === "rtl");
    } }, inputs: { nzValue: "nzValue", nzAutoFocus: "nzAutoFocus", nzDisabled: "nzDisabled", nzIndeterminate: "nzIndeterminate", nzChecked: "nzChecked" }, outputs: { nzCheckedChange: "nzCheckedChange" }, exportAs: ["nzCheckbox"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => NzCheckboxComponent),
                multi: true
            }
        ])], attrs: _c2, ngContentSelectors: _c0, decls: 6, vars: 10, consts: [[1, "ant-checkbox"], ["type", "checkbox", 1, "ant-checkbox-input", 3, "checked", "ngModel", "disabled", "ngModelChange", "click"], ["inputElement", ""], [1, "ant-checkbox-inner"]], template: function NzCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NzCheckboxComponent_Template_input_ngModelChange_1_listener($event) { return ctx.innerCheckedChange($event); })("click", function NzCheckboxComponent_Template_input_click_1_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-checkbox-checked", ctx.nzChecked && !ctx.nzIndeterminate)("ant-checkbox-disabled", ctx.nzDisabled)("ant-checkbox-indeterminate", ctx.nzIndeterminate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.nzChecked)("ngModel", ctx.nzChecked)("disabled", ctx.nzDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("autofocus", ctx.nzAutoFocus ? "autofocus" : null);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], encapsulation: 2, changeDetection: 0 });
NzCheckboxComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: NzCheckboxWrapperComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
NzCheckboxComponent.propDecorators = {
    inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['inputElement', { static: true },] }],
    nzCheckedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nzValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzAutoFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzIndeterminate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzChecked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzCheckboxComponent.prototype, "nzAutoFocus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzCheckboxComponent.prototype, "nzDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzCheckboxComponent.prototype, "nzIndeterminate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzCheckboxComponent.prototype, "nzChecked", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzCheckboxGroupComponent {
    constructor(elementRef, focusMonitor, cdr, directionality) {
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;
        this.directionality = directionality;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.options = [];
        this.nzDisabled = false;
        this.dir = 'ltr';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-checkbox-group');
    }
    trackByOption(_, option) {
        return option.value;
    }
    onCheckedChange(option, checked) {
        option.checked = checked;
        this.onChange(this.options);
    }
    ngOnInit() {
        var _a;
        this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then(() => this.onTouched());
            }
        });
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
        this.destroy$.next();
        this.destroy$.complete();
    }
    writeValue(value) {
        this.options = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this.nzDisabled = disabled;
        this.cdr.markForCheck();
    }
}
NzCheckboxGroupComponent.ɵfac = function NzCheckboxGroupComponent_Factory(t) { return new (t || NzCheckboxGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], 8)); };
NzCheckboxGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzCheckboxGroupComponent, selectors: [["nz-checkbox-group"]], hostVars: 2, hostBindings: function NzCheckboxGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-checkbox-group-rtl", ctx.dir === "rtl");
    } }, inputs: { nzDisabled: "nzDisabled" }, exportAs: ["nzCheckboxGroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => NzCheckboxGroupComponent),
                multi: true
            }
        ])], decls: 1, vars: 2, consts: [["nz-checkbox", "", "class", "ant-checkbox-group-item", 3, "nzDisabled", "nzChecked", "nzCheckedChange", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-checkbox", "", 1, "ant-checkbox-group-item", 3, "nzDisabled", "nzChecked", "nzCheckedChange"]], template: function NzCheckboxGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzCheckboxGroupComponent_label_0_Template, 3, 3, "label", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.options)("ngForTrackBy", ctx.trackByOption);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], NzCheckboxComponent], encapsulation: 2 });
NzCheckboxGroupComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
NzCheckboxGroupComponent.propDecorators = {
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzCheckboxGroupComponent.prototype, "nzDisabled", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzCheckboxWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'nz-checkbox-wrapper',
                exportAs: 'nzCheckboxWrapper',
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                template: `
    <ng-content></ng-content>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, { nzOnChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzCheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: '[nz-checkbox]',
                exportAs: 'nzCheckbox',
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                template: `
    <span
      class="ant-checkbox"
      [class.ant-checkbox-checked]="nzChecked && !nzIndeterminate"
      [class.ant-checkbox-disabled]="nzDisabled"
      [class.ant-checkbox-indeterminate]="nzIndeterminate"
    >
      <input
        #inputElement
        type="checkbox"
        class="ant-checkbox-input"
        [attr.autofocus]="nzAutoFocus ? 'autofocus' : null"
        [checked]="nzChecked"
        [ngModel]="nzChecked"
        [disabled]="nzDisabled"
        (ngModelChange)="innerCheckedChange($event)"
        (click)="$event.stopPropagation()"
      />
      <span class="ant-checkbox-inner"></span>
    </span>
    <span><ng-content></ng-content></span>
  `,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => NzCheckboxComponent),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-checkbox-wrapper-checked]': 'nzChecked',
                    '[class.ant-checkbox-rtl]': `dir === 'rtl'`,
                    '(click)': 'hostClick($event)'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: NzCheckboxWrapperComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { nzCheckedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzAutoFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzIndeterminate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['inputElement', { static: true }]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzCheckboxGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'nz-checkbox-group',
                exportAs: 'nzCheckboxGroup',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                template: `
    <label
      nz-checkbox
      class="ant-checkbox-group-item"
      *ngFor="let o of options; trackBy: trackByOption"
      [nzDisabled]="o.disabled || nzDisabled"
      [nzChecked]="o.checked!"
      (nzCheckedChange)="onCheckedChange(o, $event)"
    >
      <span>{{ o.label }}</span>
    </label>
  `,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => NzCheckboxGroupComponent),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-checkbox-group-rtl]': `dir === 'rtl'`
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzCheckboxModule {
}
NzCheckboxModule.ɵfac = function NzCheckboxModule_Factory(t) { return new (t || NzCheckboxModule)(); };
NzCheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NzCheckboxModule });
NzCheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NzCheckboxModule, { declarations: function () { return [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"]]; }, exports: function () { return [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzCheckboxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"]],
                declarations: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent],
                exports: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-checkbox.js.map

/***/ }),

/***/ "ocnv":
/*!********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-form.js ***!
  \********************************************************************************/
/*! exports provided: DefaultTooltipIcon, NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzFormModule, NzFormSplitComponent, NzFormTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTooltipIcon", function() { return DefaultTooltipIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzFormControlComponent", function() { return NzFormControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzFormDirective", function() { return NzFormDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzFormItemComponent", function() { return NzFormItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzFormLabelComponent", function() { return NzFormLabelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzFormModule", function() { return NzFormModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzFormSplitComponent", function() { return NzFormSplitComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzFormTextComponent", function() { return NzFormTextComponent; });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "pdGh");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "GR68");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "2Suw");


















/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */









const _c0 = ["*"];
function NzFormControlComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r0.iconType);
} }
function NzFormControlComponent_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.innerTip);
} }
const _c1 = function (a1) { return ["ant-form-item-explain", a1]; };
const _c2 = function (a0) { return { $implicit: a0 }; };
function NzFormControlComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NzFormControlComponent_div_5_ng_container_2_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c1, "ant-form-item-explain-" + ctx_r1.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@helpMotion", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r1.innerTip)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c2, ctx_r1.validateControl));
} }
function NzFormControlComponent_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.nzExtra);
} }
function NzFormControlComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzFormControlComponent_div_6_ng_container_1_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r2.nzExtra);
} }
function NzFormLabelComponent_span_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tooltipIconType_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", tooltipIconType_r2)("nzTheme", ctx_r1.tooltipIcon.theme);
} }
function NzFormLabelComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NzFormLabelComponent_span_2_ng_container_1_Template, 2, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", ctx_r0.nzTooltipTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.tooltipIcon.type);
} }
const NZ_CONFIG_MODULE_NAME = 'form';
const DefaultTooltipIcon = {
    type: 'question-circle',
    theme: 'outline'
};
class NzFormDirective {
    constructor(nzConfigService, elementRef, renderer, directionality) {
        var _a;
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzLayout = 'horizontal';
        this.nzNoColon = false;
        this.nzAutoTips = {};
        this.nzDisableAutoTips = false;
        this.nzTooltipIcon = DefaultTooltipIcon;
        this.dir = 'ltr';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
        this.inputChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
        this.renderer.addClass(elementRef.nativeElement, 'ant-form');
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    getInputObservable(changeType) {
        return this.inputChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(changes => changeType in changes), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(value => value[changeType]));
    }
    ngOnChanges(changes) {
        this.inputChanges$.next(changes);
    }
    ngOnDestroy() {
        this.inputChanges$.complete();
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzFormDirective.ɵfac = function NzFormDirective_Factory(t) { return new (t || NzFormDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_16__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8)); };
NzFormDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: NzFormDirective, selectors: [["", "nz-form", ""]], hostVars: 8, hostBindings: function NzFormDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-form-horizontal", ctx.nzLayout === "horizontal")("ant-form-vertical", ctx.nzLayout === "vertical")("ant-form-inline", ctx.nzLayout === "inline")("ant-form-rtl", ctx.dir === "rtl");
    } }, inputs: { nzLayout: "nzLayout", nzNoColon: "nzNoColon", nzAutoTips: "nzAutoTips", nzDisableAutoTips: "nzDisableAutoTips", nzTooltipIcon: "nzTooltipIcon" }, exportAs: ["nzForm"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]] });
NzFormDirective.ctorParameters = () => [
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_16__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] }
];
NzFormDirective.propDecorators = {
    nzLayout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzNoColon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzAutoTips: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzDisableAutoTips: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzTooltipIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_15__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_16__["WithConfig"])(),
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_15__["__metadata"])("design:type", Boolean)
], NzFormDirective.prototype, "nzNoColon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_15__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_16__["WithConfig"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_15__["__metadata"])("design:type", Object)
], NzFormDirective.prototype, "nzAutoTips", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_15__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_15__["__metadata"])("design:type", Object)
], NzFormDirective.prototype, "nzDisableAutoTips", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_15__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_16__["WithConfig"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_15__["__metadata"])("design:type", Object)
], NzFormDirective.prototype, "nzTooltipIcon", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 **/
class NzFormItemComponent {
    constructor(elementRef, renderer, cdr) {
        this.cdr = cdr;
        this.status = null;
        this.hasFeedback = false;
        this.withHelpClass = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
        renderer.addClass(elementRef.nativeElement, 'ant-form-item');
    }
    setWithHelpViaTips(value) {
        this.withHelpClass = value;
        this.cdr.markForCheck();
    }
    setStatus(status) {
        this.status = status;
        this.cdr.markForCheck();
    }
    setHasFeedback(hasFeedback) {
        this.hasFeedback = hasFeedback;
        this.cdr.markForCheck();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzFormItemComponent.ɵfac = function NzFormItemComponent_Factory(t) { return new (t || NzFormItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"])); };
NzFormItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzFormItemComponent, selectors: [["nz-form-item"]], hostVars: 12, hostBindings: function NzFormItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-form-item-has-success", ctx.status === "success")("ant-form-item-has-warning", ctx.status === "warning")("ant-form-item-has-error", ctx.status === "error")("ant-form-item-is-validating", ctx.status === "validating")("ant-form-item-has-feedback", ctx.hasFeedback && ctx.status)("ant-form-item-with-help", ctx.withHelpClass);
    } }, exportAs: ["nzFormItem"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzFormItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
NzFormItemComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const iconTypeMap = {
    error: 'close-circle-fill',
    validating: 'loading',
    success: 'check-circle-fill',
    warning: 'exclamation-circle-fill'
};
class NzFormControlComponent {
    constructor(elementRef, nzFormItemComponent, cdr, renderer, i18n, nzFormDirective) {
        var _a, _b;
        this.nzFormItemComponent = nzFormItemComponent;
        this.cdr = cdr;
        this.nzFormDirective = nzFormDirective;
        this._hasFeedback = false;
        this.validateChanges = rxjs__WEBPACK_IMPORTED_MODULE_13__["Subscription"].EMPTY;
        this.validateString = null;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
        this.status = null;
        this.validateControl = null;
        this.iconType = null;
        this.innerTip = null;
        this.nzAutoTips = {};
        this.nzDisableAutoTips = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-control');
        this.subscribeAutoTips(i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["tap"])(locale => (this.localeId = locale.locale))));
        this.subscribeAutoTips((_a = this.nzFormDirective) === null || _a === void 0 ? void 0 : _a.getInputObservable('nzAutoTips'));
        this.subscribeAutoTips((_b = this.nzFormDirective) === null || _b === void 0 ? void 0 : _b.getInputObservable('nzDisableAutoTips').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(() => this.nzDisableAutoTips === 'default')));
    }
    get disableAutoTips() {
        var _a;
        return this.nzDisableAutoTips !== 'default' ? Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["toBoolean"])(this.nzDisableAutoTips) : (_a = this.nzFormDirective) === null || _a === void 0 ? void 0 : _a.nzDisableAutoTips;
    }
    set nzHasFeedback(value) {
        this._hasFeedback = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["toBoolean"])(value);
        if (this.nzFormItemComponent) {
            this.nzFormItemComponent.setHasFeedback(this._hasFeedback);
        }
    }
    get nzHasFeedback() {
        return this._hasFeedback;
    }
    set nzValidateStatus(value) {
        if (value instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_9__["AbstractControl"] || value instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]) {
            this.validateControl = value;
            this.validateString = null;
            this.watchControl();
        }
        else if (value instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"]) {
            this.validateControl = value.control;
            this.validateString = null;
            this.watchControl();
        }
        else {
            this.validateString = value;
            this.validateControl = null;
            this.setStatus();
        }
    }
    watchControl() {
        this.validateChanges.unsubscribe();
        /** miss detect https://github.com/angular/angular/issues/10887 **/
        if (this.validateControl && this.validateControl.statusChanges) {
            this.validateChanges = this.validateControl.statusChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this.destroyed$)).subscribe(_ => {
                if (!this.disableAutoTips) {
                    this.updateAutoErrorTip();
                }
                this.setStatus();
                this.cdr.markForCheck();
            });
        }
    }
    setStatus() {
        this.status = this.getControlStatus(this.validateString);
        this.iconType = this.status ? iconTypeMap[this.status] : null;
        this.innerTip = this.getInnerTip(this.status);
        if (this.nzFormItemComponent) {
            this.nzFormItemComponent.setWithHelpViaTips(!!this.innerTip);
            this.nzFormItemComponent.setStatus(this.status);
        }
    }
    getControlStatus(validateString) {
        let status;
        if (validateString === 'warning' || this.validateControlStatus('INVALID', 'warning')) {
            status = 'warning';
        }
        else if (validateString === 'error' || this.validateControlStatus('INVALID')) {
            status = 'error';
        }
        else if (validateString === 'validating' || validateString === 'pending' || this.validateControlStatus('PENDING')) {
            status = 'validating';
        }
        else if (validateString === 'success' || this.validateControlStatus('VALID')) {
            status = 'success';
        }
        else {
            status = null;
        }
        return status;
    }
    validateControlStatus(validStatus, statusType) {
        if (!this.validateControl) {
            return false;
        }
        else {
            const { dirty, touched, status } = this.validateControl;
            return (!!dirty || !!touched) && (statusType ? this.validateControl.hasError(statusType) : status === validStatus);
        }
    }
    getInnerTip(status) {
        switch (status) {
            case 'error':
                return (!this.disableAutoTips && this.autoErrorTip) || this.nzErrorTip || null;
            case 'validating':
                return this.nzValidatingTip || null;
            case 'success':
                return this.nzSuccessTip || null;
            case 'warning':
                return this.nzWarningTip || null;
            default:
                return null;
        }
    }
    updateAutoErrorTip() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        if (this.validateControl) {
            const errors = this.validateControl.errors || {};
            let autoErrorTip = '';
            for (const key in errors) {
                if (errors.hasOwnProperty(key)) {
                    autoErrorTip = (_l = (_g = (_e = (_b = (_a = errors[key]) === null || _a === void 0 ? void 0 : _a[this.localeId]) !== null && _b !== void 0 ? _b : (_d = (_c = this.nzAutoTips) === null || _c === void 0 ? void 0 : _c[this.localeId]) === null || _d === void 0 ? void 0 : _d[key]) !== null && _e !== void 0 ? _e : (_f = this.nzAutoTips.default) === null || _f === void 0 ? void 0 : _f[key]) !== null && _g !== void 0 ? _g : (_k = (_j = (_h = this.nzFormDirective) === null || _h === void 0 ? void 0 : _h.nzAutoTips) === null || _j === void 0 ? void 0 : _j[this.localeId]) === null || _k === void 0 ? void 0 : _k[key]) !== null && _l !== void 0 ? _l : (_o = (_m = this.nzFormDirective) === null || _m === void 0 ? void 0 : _m.nzAutoTips.default) === null || _o === void 0 ? void 0 : _o[key];
                }
                if (!!autoErrorTip) {
                    break;
                }
            }
            this.autoErrorTip = autoErrorTip;
        }
    }
    subscribeAutoTips(observable) {
        observable === null || observable === void 0 ? void 0 : observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this.destroyed$)).subscribe(() => {
            if (!this.disableAutoTips) {
                this.updateAutoErrorTip();
                this.setStatus();
                this.cdr.markForCheck();
            }
        });
    }
    ngOnChanges(changes) {
        const { nzDisableAutoTips, nzAutoTips, nzSuccessTip, nzWarningTip, nzErrorTip, nzValidatingTip } = changes;
        if (nzDisableAutoTips || nzAutoTips) {
            this.updateAutoErrorTip();
            this.setStatus();
        }
        else if (nzSuccessTip || nzWarningTip || nzErrorTip || nzValidatingTip) {
            this.setStatus();
        }
    }
    ngOnInit() {
        this.setStatus();
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    ngAfterContentInit() {
        if (!this.validateControl && !this.validateString) {
            if (this.defaultValidateControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlDirective"]) {
                this.nzValidateStatus = this.defaultValidateControl.control;
            }
            else {
                this.nzValidateStatus = this.defaultValidateControl;
            }
        }
    }
}
NzFormControlComponent.ɵfac = function NzFormControlComponent_Factory(t) { return new (t || NzFormControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzFormItemComponent, 9), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzFormDirective, 8)); };
NzFormControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzFormControlComponent, selectors: [["nz-form-control"]], contentQueries: function NzFormControlComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.defaultValidateControl = _t.first);
    } }, inputs: { nzAutoTips: "nzAutoTips", nzDisableAutoTips: "nzDisableAutoTips", nzHasFeedback: "nzHasFeedback", nzValidateStatus: "nzValidateStatus", nzSuccessTip: "nzSuccessTip", nzWarningTip: "nzWarningTip", nzErrorTip: "nzErrorTip", nzValidatingTip: "nzValidatingTip", nzExtra: "nzExtra" }, exportAs: ["nzFormControl"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 7, vars: 3, consts: [[1, "ant-form-item-control-input"], [1, "ant-form-item-control-input-content"], [1, "ant-form-item-children-icon"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["class", "ant-form-item-extra", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [3, "ngClass"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [1, "ant-form-item-extra"], [4, "nzStringTemplateOutlet"]], template: function NzFormControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, NzFormControlComponent_i_4_Template, 1, 1, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, NzFormControlComponent_div_5_Template, 3, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, NzFormControlComponent_div_6_Template, 2, 1, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nzHasFeedback && ctx.iconType);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.innerTip);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nzExtra);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzStringTemplateOutletDirective"]], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_10__["helpMotion"]] }, changeDetection: 0 });
NzFormControlComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: NzFormItemComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Host"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] },
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nService"] },
    { type: NzFormDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] }
];
NzFormControlComponent.propDecorators = {
    defaultValidateControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], { static: false },] }],
    nzSuccessTip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzWarningTip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzErrorTip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzValidatingTip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzExtra: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzAutoTips: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzDisableAutoTips: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzHasFeedback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzValidateStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function toTooltipIcon(value) {
    const icon = typeof value === 'string' ? { type: value } : value;
    return Object.assign(Object.assign({}, DefaultTooltipIcon), icon);
}
class NzFormLabelComponent {
    constructor(elementRef, renderer, cdr, nzFormDirective) {
        this.cdr = cdr;
        this.nzFormDirective = nzFormDirective;
        this.nzRequired = false;
        this.noColon = 'default';
        this._tooltipIcon = 'default';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-label');
        if (this.nzFormDirective) {
            this.nzFormDirective
                .getInputObservable('nzNoColon')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(() => this.noColon === 'default'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this.destroy$))
                .subscribe(() => this.cdr.markForCheck());
            this.nzFormDirective
                .getInputObservable('nzTooltipIcon')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(() => this._tooltipIcon === 'default'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this.destroy$))
                .subscribe(() => this.cdr.markForCheck());
        }
    }
    set nzNoColon(value) {
        this.noColon = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["toBoolean"])(value);
    }
    get nzNoColon() {
        var _a;
        return this.noColon !== 'default' ? this.noColon : (_a = this.nzFormDirective) === null || _a === void 0 ? void 0 : _a.nzNoColon;
    }
    set nzTooltipIcon(value) {
        this._tooltipIcon = toTooltipIcon(value);
    }
    // due to 'get' and 'set' accessor must have the same type, so it was renamed to `tooltipIcon`
    get tooltipIcon() {
        var _a;
        return this._tooltipIcon !== 'default' ? this._tooltipIcon : toTooltipIcon(((_a = this.nzFormDirective) === null || _a === void 0 ? void 0 : _a.nzTooltipIcon) || DefaultTooltipIcon);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzFormLabelComponent.ɵfac = function NzFormLabelComponent_Factory(t) { return new (t || NzFormLabelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](NzFormDirective, 12)); };
NzFormLabelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzFormLabelComponent, selectors: [["nz-form-label"]], inputs: { nzRequired: "nzRequired", nzNoColon: "nzNoColon", nzTooltipIcon: "nzTooltipIcon", nzFor: "nzFor", nzTooltipTitle: "nzTooltipTitle" }, exportAs: ["nzFormLabel"], ngContentSelectors: _c0, decls: 3, vars: 6, consts: [["class", "ant-form-item-tooltip", "nz-tooltip", "", 3, "nzTooltipTitle", 4, "ngIf"], ["nz-tooltip", "", 1, "ant-form-item-tooltip", 3, "nzTooltipTitle"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType", "nzTheme"]], template: function NzFormLabelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NzFormLabelComponent_span_2_Template, 2, 2, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-form-item-no-colon", ctx.nzNoColon)("ant-form-item-required", ctx.nzRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("for", ctx.nzFor);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nzTooltipTitle);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzTooltipDirective"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"]], encapsulation: 2, changeDetection: 0 });
NzFormLabelComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: NzFormDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"] }] }
];
NzFormLabelComponent.propDecorators = {
    nzFor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzRequired: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzNoColon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzTooltipTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    nzTooltipIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_15__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_15__["__metadata"])("design:type", Object)
], NzFormLabelComponent.prototype, "nzRequired", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzFormDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
                selector: '[nz-form]',
                exportAs: 'nzForm',
                host: {
                    '[class.ant-form-horizontal]': `nzLayout === 'horizontal'`,
                    '[class.ant-form-vertical]': `nzLayout === 'vertical'`,
                    '[class.ant-form-inline]': `nzLayout === 'inline'`,
                    '[class.ant-form-rtl]': `dir === 'rtl'`
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_16__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }]; }, { nzLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzNoColon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzAutoTips: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzDisableAutoTips: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzTooltipIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzFormItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'nz-form-item',
                exportAs: 'nzFormItem',
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                host: {
                    '[class.ant-form-item-has-success]': 'status === "success"',
                    '[class.ant-form-item-has-warning]': 'status === "warning"',
                    '[class.ant-form-item-has-error]': 'status === "error"',
                    '[class.ant-form-item-is-validating]': 'status === "validating"',
                    '[class.ant-form-item-has-feedback]': 'hasFeedback && status',
                    '[class.ant-form-item-with-help]': 'withHelpClass'
                },
                template: `
    <ng-content></ng-content>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzFormControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'nz-form-control',
                exportAs: 'nzFormControl',
                preserveWhitespaces: false,
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_10__["helpMotion"]],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                template: `
    <div class="ant-form-item-control-input">
      <div class="ant-form-item-control-input-content">
        <ng-content></ng-content>
      </div>
      <span class="ant-form-item-children-icon">
        <i *ngIf="nzHasFeedback && iconType" nz-icon [nzType]="iconType"></i>
      </span>
    </div>
    <div [ngClass]="['ant-form-item-explain', 'ant-form-item-explain-' + status]" *ngIf="innerTip">
      <div @helpMotion>
        <ng-container *nzStringTemplateOutlet="innerTip; context: { $implicit: validateControl }">{{ innerTip }}</ng-container>
      </div>
    </div>
    <div class="ant-form-item-extra" *ngIf="nzExtra">
      <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
    </div>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: NzFormItemComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Host"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] }, { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nService"] }, { type: NzFormDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }]; }, { nzAutoTips: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzDisableAutoTips: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzHasFeedback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzValidateStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], defaultValidateControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], { static: false }]
        }], nzSuccessTip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzWarningTip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzErrorTip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzValidatingTip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzExtra: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzFormLabelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'nz-form-label',
                exportAs: 'nzFormLabel',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                template: `
    <label [attr.for]="nzFor" [class.ant-form-item-no-colon]="nzNoColon" [class.ant-form-item-required]="nzRequired">
      <ng-content></ng-content>
      <span *ngIf="nzTooltipTitle" class="ant-form-item-tooltip" nz-tooltip [nzTooltipTitle]="nzTooltipTitle">
        <ng-container *nzStringTemplateOutlet="tooltipIcon.type; let tooltipIconType">
          <i nz-icon [nzType]="tooltipIconType" [nzTheme]="tooltipIcon.theme"></i>
        </ng-container>
      </span>
    </label>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: NzFormDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"]
            }] }]; }, { nzRequired: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzNoColon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzTooltipIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], nzTooltipTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzFormSplitComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-split');
    }
}
NzFormSplitComponent.ɵfac = function NzFormSplitComponent_Factory(t) { return new (t || NzFormSplitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"])); };
NzFormSplitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzFormSplitComponent, selectors: [["nz-form-split"]], exportAs: ["nzFormSplit"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzFormSplitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
NzFormSplitComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzFormSplitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'nz-form-split',
                exportAs: 'nzFormSplit',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzFormTextComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-text');
    }
}
NzFormTextComponent.ɵfac = function NzFormTextComponent_Factory(t) { return new (t || NzFormTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"])); };
NzFormTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NzFormTextComponent, selectors: [["nz-form-text"]], exportAs: ["nzFormText"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzFormTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
NzFormTextComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzFormTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'nz-form-text',
                exportAs: 'nzFormText',
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzFormModule {
}
NzFormModule.ɵfac = function NzFormModule_Factory(t) { return new (t || NzFormModule)(); };
NzFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: NzFormModule });
NzFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzGridModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzToolTipModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"]], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzGridModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NzFormModule, { declarations: function () { return [NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent, NzFormTextComponent, NzFormSplitComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzGridModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzToolTipModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"]]; }, exports: function () { return [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzGridModule"], NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent, NzFormTextComponent, NzFormSplitComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NzFormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [
                    NzFormDirective,
                    NzFormItemComponent,
                    NzFormLabelComponent,
                    NzFormControlComponent,
                    NzFormTextComponent,
                    NzFormSplitComponent
                ],
                exports: [
                    ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzGridModule"],
                    NzFormDirective,
                    NzFormItemComponent,
                    NzFormLabelComponent,
                    NzFormControlComponent,
                    NzFormTextComponent,
                    NzFormSplitComponent
                ],
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzGridModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzToolTipModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"]]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-form.js.map

/***/ })

}]);
//# sourceMappingURL=default~layout-full-full-module~pages-login-login-module.js.map