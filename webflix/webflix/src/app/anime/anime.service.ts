import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Anime} from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private baseUrl = 'http://localhost:8000/api';
  constructor(private http: HttpClient) {}

  getAnime(): Observable<Anime[]> {
    return this.http.get<Anime[]>(`${this.baseUrl}/anime/`);
  }

  getAnimeDetails(animeId: number): Observable<Anime> {
    return this.http.get<Anime>(`${this.baseUrl}/anime/${animeId}/`);
  }
}
