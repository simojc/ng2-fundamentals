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
var EventsListComponent = (function () {
    function EventsListComponent() {
        this.event1 = {
            id: 1,
            name: 'Claude fermat Connect',
            date: '9/26/2036',
            time: '10:00 am',
            price: 599.99,
            imageUrl: '\app\assets\images\angularconnect-shield.png',
            location: {
                address: '200 Chemin Ste-Foy',
                city: 'Quebec',
                stateProvince: 'Quebec',
                country: 'Canada'
            }
        };
    }
    return EventsListComponent;
}());
EventsListComponent = __decorate([
    core_1.Component({
        selector: 'events-list',
        template: "\n\t\t<div>\n\t\t\t<h1> Upcomming Angular 2 Events </h1>\n\t\t\t<hr>\n\t\t\t<events-thumbnail  #thumbnail [event]=\"event1\"> </events-thumbnail>\n\t\t</div>\n\t "
    }),
    __metadata("design:paramtypes", [])
], EventsListComponent);
exports.EventsListComponent = EventsListComponent;
//# sourceMappingURL=events-list.component.js.map