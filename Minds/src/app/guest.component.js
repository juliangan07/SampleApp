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
var router_1 = require("@angular/router");
var guest_service_1 = require("./guest.service");
var GuestComponent = (function () {
    function GuestComponent(guestService, router) {
        this.guestService = guestService;
        this.router = router;
    }
    GuestComponent.prototype.onSelect = function (guest) {
        this.selectedGuest = guest;
    };
    GuestComponent.prototype.getGuest = function () {
        var _this = this;
        this.guestService.getGuests().then(function (guests) { return _this.guests = guests; });
    };
    GuestComponent.prototype.ngOnInit = function () {
        this.getGuest();
    };
    GuestComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedGuest.name]);
    };
    return GuestComponent;
}());
GuestComponent = __decorate([
    core_1.Component({
        selector: 'my-guest',
        templateUrl: './guest.component.html',
        styleUrls: ['./guest.component.css']
    }),
    __metadata("design:paramtypes", [guest_service_1.GuestService,
        router_1.Router])
], GuestComponent);
exports.GuestComponent = GuestComponent;
//# sourceMappingURL=guest.component.js.map