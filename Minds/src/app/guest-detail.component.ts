import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Guest } from './guest';
import { GuestService } from './guest.service'

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'guest-detail',
    templateUrl: './guest-detail.component.html',
    styleUrls: ['./guest-detail.component.css']
})

export class GuestDetailComponent implements OnInit {
    guest: Guest;

    constructor(
        private guestService: GuestService,
        private route: ActivatedRoute,
        private location: Location
    ) {} 

    ngOnInit(): void {
        this.route.params.switchMap((params: Params) => this.guestService.getGuest(params['name'])).subscribe(guest => this.guest = guest);
    }

    goBack() {
        this.location.back();
    }
}