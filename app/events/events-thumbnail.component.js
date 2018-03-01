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
//Le path « @angular/core » est défini dans "systmejs.congig.js" comme correspondant à 'npm:@angular/core/bundles/core.umd.js',
// « npm: » est mappé au dossier "node_modules" tel que défini tjrs dans "systmejs.congig.js"
var EventsThumbnailComponent = (function () {
    function EventsThumbnailComponent() {
    }
    return EventsThumbnailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EventsThumbnailComponent.prototype, "event", void 0);
EventsThumbnailComponent = __decorate([
    core_1.Component({
        selector: 'events-thumbnail',
        templateUrl: 'app/events/events-thumbnail.component.html',
        styles: ["\n\t\t.pad-left {margin-left: 10px;}\n\t\t.well div {color: #bbb;}\n\t"]
    }),
    __metadata("design:paramtypes", [])
], EventsThumbnailComponent);
exports.EventsThumbnailComponent = EventsThumbnailComponent;
//# sourceMappingURL=events-thumbnail.component.js.map