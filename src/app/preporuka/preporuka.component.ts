import { Component } from '@angular/core';
import { Flights } from '../flights/flights.model';

@Component({
  selector: 'app-preporuka',
  templateUrl: './preporuka.component.html',
  styleUrls: ['./preporuka.component.scss']
})
export class PreporukaComponent {
 flight= new Flights('Beograd', 'Podgorica', 'Er','10:30','11:30',"25.05.2024.")
}
