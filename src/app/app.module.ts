import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OnamaComponent } from './onama/onama.component';
import { PreporukaComponent } from './preporuka/preporuka.component';
import { PonudaComponent } from './ponuda/ponuda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DIComponent } from './di/di.component';
import { FlightserviceService } from './service/flightservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FlightCrudComponent } from './flight-crud/flight-crud.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RezervacijaLetovaComponent } from './rezervacija-letova/rezervacija-letova.component';
import { Store, StoreModule } from '@ngrx/store';
import { flightReducer, metaReducerLocalStorage } from './state/flight.reducer';


@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    NavbarComponent,
    OnamaComponent,
    PreporukaComponent,
    PonudaComponent,
    DIComponent,
    FlightCrudComponent,
    RxjsComponent,
    RezervacijaLetovaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({rezervacijeUnosi: flightReducer}, {metaReducers: [metaReducerLocalStorage]})
  ],
  providers: [FlightserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
