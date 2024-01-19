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
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FlightserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
