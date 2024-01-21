import { createAction, props } from "@ngrx/store";
import { FlightCrudModel } from "../flight-crud/flight-crud.model";

export const addReservation = createAction('Dodaj rezervaciju', props<FlightCrudModel>());
export const deleteReservation = createAction('Izbrisi rezervaciju', props<FlightCrudModel>());