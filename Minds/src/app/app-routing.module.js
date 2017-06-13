"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ringo_guest_1 = require("./ringo-guest");
var paul_guest_1 = require("./paul-guest");
var john_guest_1 = require("./john-guest");
var george_guest_1 = require("./george-guest");
var album_1 = require("./album");
var guest_component_1 = require("./guest.component");
var guest_detail_component_1 = require("./guest-detail.component");
var guest_location_1 = require("./guest-location");
var routes = [
    { path: 'ringo', component: ringo_guest_1.RingoGuest },
    { path: 'paul', component: paul_guest_1.PaulGuest },
    { path: 'john', component: john_guest_1.JohnGuest },
    { path: 'george', component: george_guest_1.GeorgeGuest },
    { path: 'album', component: album_1.LeaderBoard },
    { path: 'location', component: guest_location_1.GuestLocation },
    { path: 'detail/:name', component: guest_detail_component_1.GuestDetailComponent },
    { path: 'guests', component: guest_component_1.GuestComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map