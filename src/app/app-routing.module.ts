import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PonudaComponent } from './ponuda/ponuda.component';
import { PreporukaComponent } from './preporuka/preporuka.component';
import { OnamaComponent } from './onama/onama.component';
import { FlightCrudComponent } from './flight-crud/flight-crud.component';
import { FlightsComponent } from './flights/flights.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RezervacijaLetovaComponent } from './rezervacija-letova/rezervacija-letova.component';

const routes: Routes = [
  { path: 'flights', component:FlightsComponent},
  { path: 'ponuda', component: PonudaComponent },
  { path: 'preporuka', component: PreporukaComponent },
  { path: 'onama', component: OnamaComponent },
  { path: 'crud', component: FlightCrudComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'rez', component: RezervacijaLetovaComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
