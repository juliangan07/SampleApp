import { Component, OnInit} from '@angular/core';

import { Guest } from './guest';
import { GuestService } from './guest.service';

@Component({
    selector: 'paul-guest',
    templateUrl: './paul-guest.html',
    styleUrls: ['./paul-guest.css']
})

export class PaulGuest implements OnInit {
    guests: Guest[] = [];

    constructor(private guestService: GuestService) {}

    ngOnInit(): void {
        this.guestService.getPaul().then(guests => this.guests = guests);

    }
}