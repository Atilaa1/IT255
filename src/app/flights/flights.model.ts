export class Flights {
    constructor(public pocetnaDestinacija: string, public finalnaDestinacija: string, public avioKompanija: string, public satPolaska: string, public satDolaska: string, public datumLeta: string) {
        this.pocetnaDestinacija = pocetnaDestinacija;
        this.finalnaDestinacija = finalnaDestinacija;
        this.avioKompanija = avioKompanija;
        this.satPolaska = satPolaska;
        this.satDolaska = satDolaska;
        this.datumLeta = datumLeta
    }
}