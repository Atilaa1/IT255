import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OnamaComponent } from './onama/onama.component';
import { PreporukaComponent } from './preporuka/preporuka.component';
import { PonudaComponent } from './ponuda/ponuda.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DIComponent } from './di/di.component';
import { FlightserviceService } from './service/flightservice.service';
import { Flights } from './flights/flights.model';

const routes: Routes = [
  { path: 'ponuda', component: PonudaComponent },
  { path: 'preporuka', component: PreporukaComponent },
  { path: 'onama', component: OnamaComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    NavbarComponent,
    OnamaComponent,
    PreporukaComponent,
    PonudaComponent,
    DIComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FlightserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
