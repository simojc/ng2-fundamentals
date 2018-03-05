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
var EventsThumbnailComponent = (function () {
    function EventsThumbnailComponent() {
    }
    EventsThumbnailComponent.prototype.getStartTimeStyle = function () {
        if (this.event && this.event.time === '8:00 am')
            return { color: '#003300', 'font-weight': 'bold' };
        return {};
        // On peut assi utiliser des classe de style pour faire la même chose et utiliser dans le template ngClass à la place de ngStyle.
    };
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
        styles: ["\n\t\t.thumbnail {min-height: 201px;}\n\t\t.pad-left {margin-left: 10px;}\n\t\t.well div {color: #bbb;}\t\t\n\t"]
    }),
    __metadata("design:paramtypes", [])
], EventsThumbnailComponent);
exports.EventsThumbnailComponent = EventsThumbnailComponent;
//# sourceMappingURL=events-thumbnail.component.js.map