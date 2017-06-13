"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var guest_data_1 = require("./guest-data");
var guest_data_2 = require("./guest-data");
var guest_data_3 = require("./guest-data");
var guest_data_4 = require("./guest-data");
var guest_data_5 = require("./guest-data");
var guest_data_6 = require("./guest-data");
var guest_data_7 = require("./guest-data");
var GuestService = (function () {
    function GuestService() {
    }
    GuestService.prototype.getGuests = function () {
        return Promise.resolve(guest_data_1.GUESTS);
    };
    GuestService.prototype.getGuest = function (name) {
        return this.getGuests().then(function (guest) { return guest.find(function (guest) { return guest.name === name; }); });
    };
    GuestService.prototype.getRingo = function () {
        return Promise.resolve(guest_data_2.RINGO);
    };
    GuestService.prototype.getPaul = function () {
        return Promise.resolve(guest_data_3.PAUL);
    };
    GuestService.prototype.getJohn = function () {
        return Promise.resolve(guest_data_4.JOHN);
    };
    GuestService.prototype.getGeorge = function () {
        return Promise.resolve(guest_data_5.GEORGE);
    };
    GuestService.prototype.getLeaderBoard = function () {
        return Promise.resolve(guest_data_6.LEADERBOARD);
    };
    GuestService.prototype.getLocation = function () {
        return Promise.resolve(guest_data_7.LOCATION);
    };
    return GuestService;
}());
GuestService = __decorate([
    core_1.Injectable()
], GuestService);
exports.GuestService = GuestService;
;
//# sourceMappingURL=guest.service.js.map