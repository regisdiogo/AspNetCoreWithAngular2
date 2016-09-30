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
var AboutComponent = (function () {
    function AboutComponent(titleService) {
        this.titleService = titleService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('About - ASP.NET Core with Angular2');
    };
    AboutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'about-app',
            templateUrl: '../template/about.html'
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map