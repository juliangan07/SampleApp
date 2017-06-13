import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { GuestDetailComponent } from './guest-detail.component';
import { AppComponent }  from './app.component';
import { GuestComponent } from './guest.component';
import { GuestService } from './guest.service';
import { RingoGuest } from './ringo-guest';
import { PaulGuest } from './paul-guest';
import { JohnGuest } from './john-guest';
import { GeorgeGuest } from './george-guest';
import { LeaderBoard } from './album';
import { GuestLocation } from './guest-location';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
    ],
  declarations: [ 
    AppComponent,
    GuestDetailComponent,
    GuestComponent,
    RingoGuest,
    PaulGuest,
    JohnGuest,
    GeorgeGuest,
    LeaderBoard,
    GuestLocation
    ],
  providers: [
    GuestService
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
