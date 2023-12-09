import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightserviceService {

  getprice(numberOfFlights: number): number {
    let cenaPoLetu = 5000;
    return cenaPoLetu * numberOfFlights;
  }
  constructor() { }
}
