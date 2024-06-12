import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Cartoons} from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class CartoonsService {
  private baseUrl = 'http://localhost:8000/api';
  constructor(private http: HttpClient) {}

  getCartoons(): Observable<Cartoons[]> {
    return this.http.get<Cartoons[]>(`${this.baseUrl}/cartoons/`);
  }

  getCartoonsDetails(cartoonsId: number): Observable<Cartoons> {
    return this.http.get<Cartoons>(`${this.baseUrl}/cartoons/${cartoonsId}/`);
  }
}
