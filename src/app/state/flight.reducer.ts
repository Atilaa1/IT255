import { createReducer, on, ActionReducer, INIT, UPDATE } from "@ngrx/store";
import { addReservation, deleteReservation } from "./flight.actions";
import { FlightCrudModel } from "../flight-crud/flight-crud.model";

export const rezervacije: FlightCrudModel[] = [];

export const flightReducer = createReducer(rezervacije, on(addReservation, (rez, unos) => {
    const rezervacijeKopija: FlightCrudModel[] = JSON.parse(JSON.stringify(rez));
    rezervacijeKopija.push(unos);
    return rezervacijeKopija;
}), on(deleteReservation, (rez, unos) => {
    const rezervacijeKopija: FlightCrudModel[] = JSON.parse(JSON.stringify(rez));
    const found = rezervacijeKopija.find(u => u.id == unos.id);
    if(found){
        rezervacijeKopija.splice(rezervacijeKopija.indexOf(found), 1);
    }

    return rezervacijeKopija;
})

);

export const metaReducerLocalStorage = (reducer: ActionReducer<any>): ActionReducer<any> => {
    return (state, action) => {
        if(action.type === INIT || action.type == UPDATE){
            const storageValue = localStorage.getItem("state");
            if(storageValue){
                try{
                    return JSON.parse(storageValue);
                } catch {
                    localStorage.removeItem("state");
                }
            }
        }

        const nextState = reducer(state, action);
        localStorage.setItem("state", JSON.stringify(nextState));
        return nextState;
    };
}