import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: any;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('movie_id');
    if (movieId) {
      this.moviesService.getMovieDetails(+movieId).subscribe(
        (data) => {
          this.movie = {
            ...data,
            genreDisplay: data.genre.map((g: { name: any; }) => g.name).join(', '), // Handles genres
            releaseYear: data.release ? data.release.release : 'Unknown' // Handles release year
          };
        },
        (error) => {
          console.error('Failed to get movie details', error);
        }
      );
    }
}

}

