import { Component } from '@angular/core';
import { FlightserviceService } from '../service/flightservice.service';
import { FlightsComponent } from '../flights/flights.component';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.scss']
})
export class DIComponent {
  ukupnaCena: number;
  constructor(private flightService: FlightserviceService, private flightsComponent: FlightsComponent) {
    let numberOfFlights = this.flightsComponent.flights.length;
    this.ukupnaCena = this.flightService.getprice(numberOfFlights);
  }


}
