import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flajts } from '../model/flajts';

@Injectable({
  providedIn: 'root'
})
export class FlajService {

  private baseUrl="http://localhost:3000/flights";

  constructor(private _httpClient:HttpClient) { }

  getFlajts():Observable<Flajts[]>{
    return this._httpClient.get<Flajts[]>(this.baseUrl);
  }

}
