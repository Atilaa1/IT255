import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightCrudComponent } from './flight-crud.component';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ApiService } from '../shared/api.service';

describe('FlightCrudComponent', () => {
  let component: FlightCrudComponent;
  let fixture: ComponentFixture<FlightCrudComponent>;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FlightCrudComponent],
      providers: [
        { provide: ApiService, useValue: jasmine.createSpyObj('ApiService', ['postFlight', 'getFlight', 'deleteFlight', 'updateFlight']) }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightCrudComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add flight', () => {
    const flight = { polazak: 'Test origin', dolazak: 'Test destination', vremePoletanja: '12:00' };
    component.formValue.setValue(flight);
    spyOn(apiService, 'postFlight').and.returnValue(of({}));
    spyOn(apiService, 'getFlight').and.returnValue(of([]));
    component.postFlightDetails();
    expect(apiService.postFlight).toHaveBeenCalledWith(flight);
    expect(apiService.getFlight).toHaveBeenCalled();
  });

  it('should get all flights', () => {
    const flights = [{ id: 1, polazak: 'Test origin', dolazak: 'Test destination', vremePoletanja: '12:00' }];
    spyOn(apiService, 'getFlight').and.returnValue(of(flights));
    component.getAllFlights();
    expect(apiService.getFlight).toHaveBeenCalled();
    expect(component.flightData).toEqual(flights);
  });

});
