import { Component } from '@angular/core';
import { Flights } from './flights.model';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent {

  values?: string;

  angForm = new FormGroup({
    pocetnaDestinacija: new FormControl("", Validators.compose([Validators.required, Validators.minLength(6)])),
    finalnaDestinacija: new FormControl("", Validators.compose([Validators.required, Validators.minLength(6)])),
    kompanija: new FormControl("", Validators.compose([Validators.required, Validators.minLength(6)])),
    datum: new FormControl("", Validators.compose([Validators.required, Validators.minLength(6)])),
    vremep: new FormControl("", Validators.compose([Validators.required, Validators.minLength(6)])),
    vremed: new FormControl("", Validators.compose([Validators.required, Validators.minLength(6)])),
  });
  

  validacija() {
    console.log(this.angForm.value);
    if (this.angForm.controls['pocetnaDestinacija'].errors?.['minLength'] || this.angForm.controls['finalnaDestinacija'].errors?.['minLength'] || this.angForm.controls['kompanija'].errors?.['minLength'] || this.angForm.controls['datum'].errors?.['minLength'] || this.angForm.controls['vremep'].errors?.['minLength'] || this.angForm.controls['vremed'].errors?.['minLength']) {
      console.log("Unos ima manje od 6 karaktera");
    }
    else if(this.angForm.controls['pocetnaDestinacija'].errors || this.angForm.controls['finalnaDestinacija'].errors || this.angForm.controls['kompanija'].errors || this.angForm.controls['datum'].errors || this.angForm.controls['vremep'].errors || this.angForm.controls['vremed'].errors    ){
      console.log("Polja moraju biti popunjena");
    }

  }
  getControl(name: any): AbstractControl | null {
    return this.angForm.get(name)
  }

  gratis=0;
  povecajGratis(gratis:number){
    this.gratis+=gratis;

  }

  flights: Flights[];

  constructor() {
    this.flights = [
      new Flights('Beograd', 'Podgorica', 'Er', '10:30', '11:30', "25.05.2024."),
      new Flights('Beograd', 'Budimpesta', 'Er2', '13:30', '14:30', "28.05.2024."),
      new Flights('Beograd', 'New York', 'Er5', '20:00', '00:00', "27.05.2024."),

    ];
  }
  addFlights(pocetnaDestinacija: HTMLInputElement, finalnaDestinacija: HTMLInputElement, avioKompanija: HTMLInputElement, satPolaska: HTMLInputElement, satDolaska: HTMLInputElement, datumLeta: HTMLInputElement): boolean {
    if (this.angForm.valid) {
      this.flights.push(new Flights(pocetnaDestinacija.value, finalnaDestinacija.value, avioKompanija.value, satPolaska.value, satDolaska.value, datumLeta.value));
      pocetnaDestinacija.value = '';
      finalnaDestinacija.value = '';
      avioKompanija.value = '';
      satPolaska.value = '';
      satDolaska.value = '';
      datumLeta.value = '';
      return false;
    }
    else {
      this.validacija();
      return false;
    }
  }
}
