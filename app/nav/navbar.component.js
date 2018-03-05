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
var core_1 = require("@angular/core");
//Le path � @angular/core � est d�fini dans "systmejs.congig.js" comme correspondant � 'npm:@angular/core/bundles/core.umd.js',
// � npm: � est mapp� au dossier "node_modules" tel que d�fini tjrs dans "systmejs.congig.js"
var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    core_1.Component({
        selector: 'nav-bar',
        templateUrl: 'app/nav/navbar.component.html',
        styles: ["\n\t\t.nav.navbar-navbar {font-size: 15px;}\n    #searchForm {margin-right: 100px;}\n\t\t@media (max-width: 1200px) {#searchForm {display:none}}\n\t\tli > a.active { color: #F97924; }\n\t"]
    }),
    __metadata("design:paramtypes", [])
], NavBarComponent);
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.component.js.map