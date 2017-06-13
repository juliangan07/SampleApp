import { Component, OnInit} from '@angular/core';

import { Guest } from './guest';
import { GuestService } from './guest.service';

@Component({
    selector: 'ringo-guest',
    templateUrl: './ringo-guest.html',
    styleUrls: ['./ringo-guest.css']
})

export class RingoGuest implements OnInit {
    guests: Guest[] = [];

    constructor(private guestService: GuestService) {}

    ngOnInit(): void {
        this.guestService.getRingo().then(guests => this.guests = guests);

    }
}