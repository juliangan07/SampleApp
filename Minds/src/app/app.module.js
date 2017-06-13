"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var guest_detail_component_1 = require("./guest-detail.component");
var app_component_1 = require("./app.component");
var guest_component_1 = require("./guest.component");
var guest_service_1 = require("./guest.service");
var ringo_guest_1 = require("./ringo-guest");
var paul_guest_1 = require("./paul-guest");
var john_guest_1 = require("./john-guest");
var george_guest_1 = require("./george-guest");
var album_1 = require("./album");
var guest_location_1 = require("./guest-location");
var app_routing_module_1 = require("./app-routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            guest_detail_component_1.GuestDetailComponent,
            guest_component_1.GuestComponent,
            ringo_guest_1.RingoGuest,
            paul_guest_1.PaulGuest,
            john_guest_1.JohnGuest,
            george_guest_1.GeorgeGuest,
            album_1.LeaderBoard,
            guest_location_1.GuestLocation
        ],
        providers: [
            guest_service_1.GuestService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map