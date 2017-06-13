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
var common_1 = require("@angular/common");
var guest_service_1 = require("./guest.service");
require("rxjs/add/operator/switchMap");
var GuestDetailComponent = (function () {
    function GuestDetailComponent(guestService, route, location) {
        this.guestService = guestService;
        this.route = route;
        this.location = location;
    }
    GuestDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) { return _this.guestService.getGuest(params['name']); }).subscribe(function (guest) { return _this.guest = guest; });
    };
    GuestDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return GuestDetailComponent;
}());
GuestDetailComponent = __decorate([
    core_1.Component({
        selector: 'guest-detail',
        templateUrl: './guest-detail.component.html',
        styleUrls: ['./guest-detail.component.css']
    }),
    __metadata("design:paramtypes", [guest_service_1.GuestService,
        router_1.ActivatedRoute,
        common_1.Location])
], GuestDetailComponent);
exports.GuestDetailComponent = GuestDetailComponent;
//# sourceMappingURL=guest-detail.component.js.map