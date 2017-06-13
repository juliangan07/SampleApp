import { Component, OnInit} from '@angular/core';

import { Guest } from './guest';
import { GuestService } from './guest.service';

@Component({
    selector: 'george-guest',
    templateUrl: './george-guest.html',
    styleUrls: ['./george-guest.css']
})

export class GeorgeGuest implements OnInit {
    guests: Guest[] = [];

    constructor(
        private guestService: GuestService
        ) {}

    ngOnInit(): void {
        this.guestService.getGeorge().then(guests => this.guests = guests);

    }

}