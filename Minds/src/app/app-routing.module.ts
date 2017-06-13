import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RingoGuest } from './ringo-guest';
import { PaulGuest } from './paul-guest';
import { JohnGuest } from './john-guest';
import { GeorgeGuest } from './george-guest';
import { LeaderBoard } from './album';
import { GuestComponent } from './guest.component';
import { GuestDetailComponent } from './guest-detail.component';
import { GuestLocation } from './guest-location';

const routes: Routes = [
    {path: 'ringo', component: RingoGuest},
    {path: 'paul', component: PaulGuest},
    {path: 'john', component: JohnGuest},
    {path: 'george', component: GeorgeGuest},
    {path: 'album', component: LeaderBoard},
    {path: 'location', component: GuestLocation},
    {path: 'detail/:name', component: GuestDetailComponent},
    {path: 'guests', component: GuestComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}