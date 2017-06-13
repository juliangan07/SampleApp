import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

import { Guest } from './guest';
import { GuestService } from './guest.service';

@Component({
  selector: 'my-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})

export class GuestComponent implements OnInit  { 
  guests: Guest[]
  selectedGuest: Guest;

  onSelect(guest: Guest): void {
    this.selectedGuest = guest;
  }

  constructor(
    private guestService: GuestService,
    private router: Router) {}

  getGuest(): void {
    this.guestService.getGuests().then(guests => this.guests = guests);
  }

  ngOnInit(): void {
    this.getGuest();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedGuest.name]);
  }
}
