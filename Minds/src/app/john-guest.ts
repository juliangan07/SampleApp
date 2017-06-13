import { Component, OnInit} from '@angular/core';

import { Guest } from './guest';
import { GuestService } from './guest.service';

@Component({
    selector: 'john-guest',
    templateUrl: './john-guest.html',
    styleUrls: ['./john-guest.css']
})

export class JohnGuest implements OnInit {
    guests: Guest[] = [];

    constructor(private guestService: GuestService) {}

    ngOnInit(): void {
        this.guestService.getJohn().then(guests => this.guests = guests);

    }
}