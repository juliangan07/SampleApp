import { Component, OnInit} from '@angular/core';

import { Guest } from './guest';
import { GuestService } from './guest.service';

@Component({
    selector: 'album',
    templateUrl: './album.html',
    styleUrls: ['./album.css']
})

export class LeaderBoard implements OnInit {
    guests: Guest[] = [];

    constructor(
        private guestService: GuestService
        ) {}

    ngOnInit(): void {
        this.guestService.getLeaderBoard().then(guests => this.guests = guests);

    }

}