import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FlightCrudModel } from "../flight-crud/flight-crud.model";

export const selectSveRezervacije = createSelector(
    createFeatureSelector('rezervacijeUnosi'), (state: FlightCrudModel[]) => {
        return state;
    }
);

export const selectBrojRezervacija = createSelector(
    createFeatureSelector('rezervacijeUnosi'), (state: FlightCrudModel[]) => {
        return state.length;
    }
);