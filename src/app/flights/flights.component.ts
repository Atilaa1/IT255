import { Component } from '@angular/core';
import { Flights } from './flights.model';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent {
  flights: Flights[];
  constructor() {
    this.flights = [
      new Flights('Beograd', 'Podgorica', 'Er','10:30','11:30',"25.05.2024."),
      new Flights('Beograd', 'Budimpesta', 'Er2','13:30','14:30',"28.05.2024."),
      new Flights('Beograd', 'New York', 'Er5','20:00','00:00',"27.05.2024."),
      
    ];
  }
  addFlights(pocetnaDestinacija:HTMLInputElement,finalnaDestinacija:HTMLInputElement,avioKompanija:HTMLInputElement,satPolaska:HTMLInputElement,satDolaska:HTMLInputElement,datumLeta:HTMLInputElement):boolean{
    this.flights.push(new Flights(pocetnaDestinacija.value,finalnaDestinacija.value,avioKompanija.value,satPolaska.value,satDolaska.value,datumLeta.value));
      pocetnaDestinacija.value='';
      finalnaDestinacija.value='';
      avioKompanija.value='';
      satPolaska.value='';
      satDolaska.value='';
      datumLeta.value='';
      return false;
      
  }
}
