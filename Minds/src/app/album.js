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
var LeaderBoard = (function () {
    function LeaderBoard(guestService) {
        this.guestService = guestService;
        this.guests = [];
    }
    LeaderBoard.prototype.ngOnInit = function () {
        var _this = this;
        this.guestService.getLeaderBoard().then(function (guests) { return _this.guests = guests; });
    };
    return LeaderBoard;
}());
LeaderBoard = __decorate([
    core_1.Component({
        selector: 'album',
        templateUrl: './album.html',
        styleUrls: ['./album.css']
    }),
    __metadata("design:paramtypes", [guest_service_1.GuestService])
], LeaderBoard);
exports.LeaderBoard = LeaderBoard;
//# sourceMappingURL=album.js.map