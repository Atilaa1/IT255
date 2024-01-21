import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSveRezervacije } from '../state/flight.selectors';
import { FlightCrudModel } from '../flight-crud/flight-crud.model';
import { deleteReservation } from '../state/flight.actions';

@Component({
  selector: 'app-rezervacija-letova',
  templateUrl: './rezervacija-letova.component.html',
  styleUrls: ['./rezervacija-letova.component.scss']
})
export class RezervacijaLetovaComponent {
  rezervacijeUnosi$: Observable<any>;

  constructor(private store: Store){
    this.rezervacijeUnosi$ = store.select(selectSveRezervacije);
  }

  izbrisiRezervaciju(flight: FlightCrudModel){
    this.store.dispatch(deleteReservation(flight));
  }
}

