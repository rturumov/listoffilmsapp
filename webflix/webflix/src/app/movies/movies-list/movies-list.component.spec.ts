import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../movies.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];
  selectedMovie: Movie | null = null;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(
      (movies) => this.movies = movies,
      (error) => console.error('Error fetching movies', error)
    );
  }

  onSelectMovie(movie: Movie): void {
    this.selectedMovie = movie;
  }
}

