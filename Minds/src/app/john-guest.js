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
var guest_service_1 = require("./guest.service");
var JohnGuest = (function () {
    function JohnGuest(guestService) {
        this.guestService = guestService;
        this.guests = [];
    }
    JohnGuest.prototype.ngOnInit = function () {
        var _this = this;
        this.guestService.getJohn().then(function (guests) { return _this.guests = guests; });
    };
    return JohnGuest;
}());
JohnGuest = __decorate([
    core_1.Component({
        selector: 'john-guest',
        templateUrl: './john-guest.html',
        styleUrls: ['./john-guest.css']
    }),
    __metadata("design:paramtypes", [guest_service_1.GuestService])
], JohnGuest);
exports.JohnGuest = JohnGuest;
//# sourceMappingURL=john-guest.js.map