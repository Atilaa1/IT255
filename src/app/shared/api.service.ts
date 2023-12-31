import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postFlight(data: any) {
    return this.http.post<any>("http://localhost:3000/flights", data).pipe(map((res: any) => {
      return res;
    }))
  }
  getFlight() {
    return this.http.get<any>("http://localhost:3000/flights").pipe(map((res: any) => {
      return res;
    }))
  }
  updateFlight(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/flights" + "/" + id, data).pipe(map((res: any) => {
      return res;
    }))
  }
  deleteFlight(id: number) {
    return this.http.delete<any>("http://localhost:3000/flights" + "/" + id).pipe(map((res: any) => {
      return res;
    }))
  }
}
