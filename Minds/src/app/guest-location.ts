import { Component, OnInit} from '@angular/core';

import { Guest } from './guest';
import { GuestService } from './guest.service';

@Component({
    selector: 'guest-location',
    templateUrl: './guest-location.html',
    styleUrls: ['./guest-location.css']
})

export class GuestLocation implements OnInit {
    guests: Guest[] = [];

    constructor(
        private guestService: GuestService
        ) {}

    ngOnInit(): void {
        this.guestService.getLocation().then(guests => this.guests = guests);

    }

}