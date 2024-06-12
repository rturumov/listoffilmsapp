
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Series } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private baseUrl = 'http://localhost:8000/api'; // Adjust accordingly

  constructor(private http: HttpClient) {}

  getSeries(): Observable<Series[]> {
    return this.http.get<Series[]>(`${this.baseUrl}/series/`);
  }

  getSeriesDetails(seriesId: number): Observable<Series> {
    return this.http.get<Series>(`${this.baseUrl}/series/${seriesId}/`);
  }
}

