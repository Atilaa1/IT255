import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsComponent } from './flights.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

describe('FlightsComponent', () => {
  let component: FlightsComponent;
  let fixture: ComponentFixture<FlightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FlightsComponent]
    });
    fixture = TestBed.createComponent(FlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('form invalid when empty', () => {
    expect(component.angForm.valid).toBeFalsy();
  });

  it('should not add a flight if form is invalid', () => {
    const pocetnaDestinacijaInput = document.createElement('input');
    pocetnaDestinacijaInput.value = '';
    const finalnaDestinacijaInput = document.createElement('input');
    finalnaDestinacijaInput.value = 'From';
    const kompanijaInput = document.createElement('input');
    kompanijaInput.value = 'To';
    const datumInput = document.createElement('input');
    datumInput.value = '';
    const vremepInput = document.createElement('input');
    vremepInput.value = '';
    const vremedInput = document.createElement('input');
    vremedInput.value = '';
    component.angForm = new FormGroup({
      pocetnaDestinacija: new FormControl("", Validators.compose([Validators.required, Validators.minLength(6)])),
      finalnaDestinacija: new FormControl("", Validators.compose([Validators.required, Validators.minLength(6)])),
      kompanija: new FormControl("", Validators.compose([Validators.required, Validators.minLength(6)])),
      datum: new FormControl("", Validators.compose([Validators.required, Validators.minLength(6)])),
      vremep: new FormControl("", Validators.compose([Validators.required, Validators.minLength(4)])),
      vremed: new FormControl("", Validators.compose([Validators.required, Validators.minLength(4)])),
    });
    component.addFlights(pocetnaDestinacijaInput, finalnaDestinacijaInput, kompanijaInput, datumInput, vremepInput, vremedInput);
  expect(component.flights.length).toBe(3);
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
