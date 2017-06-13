import { Injectable } from '@angular/core';

import { Guest } from './guest';
import { GUESTS } from './guest-data';
import { RINGO } from './guest-data';
import { PAUL } from './guest-data';
import { JOHN } from './guest-data';
import { GEORGE } from './guest-data';
import { LEADERBOARD } from './guest-data';
import { LOCATION } from './guest-data';

@Injectable() 

export class GuestService {
    getGuests(): Promise<Guest[]> {
        return Promise.resolve(GUESTS);
    }

    getGuest(name: string): Promise<Guest> {
        return this.getGuests().then(guest => guest.find(guest => guest.name === name));
    }

    getRingo(): Promise<Guest[]> {
        return Promise.resolve(RINGO);
    }

    getPaul(): Promise<Guest[]> {
        return Promise.resolve(PAUL);
    }

    getJohn(): Promise<Guest[]> {
        return Promise.resolve(JOHN);
    }

    getGeorge(): Promise<Guest[]> {
        return Promise.resolve(GEORGE);
    }

    getLeaderBoard(): Promise<Guest[]> {
        return Promise.resolve(LEADERBOARD);
    }

    getLocation(): Promise<Guest[]> {
        return Promise.resolve(LOCATION);
    }
};