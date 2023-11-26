import { Component } from '@angular/core';
import { FlightsComponent } from '../flights/flights.component';

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.scss']
})
export class PonudaComponent {
  appComponent:FlightsComponent = new FlightsComponent;
  flight = this.appComponent.flights;
}
