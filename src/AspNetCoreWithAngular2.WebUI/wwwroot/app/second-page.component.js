"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var SecondPageComponent = (function () {
    function SecondPageComponent(titleService) {
        this.titleService = titleService;
    }
    SecondPageComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Second Page - ASP.NET Core with Angular2');
    };
    SecondPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'second-page-app',
            templateUrl: '../template/second-page.html'
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title])
    ], SecondPageComponent);
    return SecondPageComponent;
}());
exports.SecondPageComponent = SecondPageComponent;
//# sourceMappingURL=second-page.component.js.map