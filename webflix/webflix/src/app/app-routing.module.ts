import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import {AnimeListComponent} from "./anime/anime-list/anime-list.component";
import {AnimeDetailsComponent} from "./anime/anime-details/anime-details.component";
import {CartoonsListComponent} from "./cartoons/cartoons-list/cartoons-list.component";
import {CartoonsDetailsComponent} from "./cartoons/cartoons-details/cartoons-details.component";
import {SeriesDetailsComponent} from "./series/series-details/series-details.component";
import {SeriesListComponent} from "./series/series-list/series-list.component";

const routes: Routes = [
  { path: 'movies', component: MoviesListComponent },
  { path: 'movies/:movie_id', component: MovieDetailsComponent },
  { path: 'anime', component: AnimeListComponent },
  { path: 'anime/:anime_id', component: AnimeDetailsComponent },
  { path: 'cartoons', component: CartoonsListComponent },
  { path: 'cartoons/:cartoons_id', component: CartoonsDetailsComponent },
  { path: 'series', component: SeriesListComponent },
  { path: 'series/:series_id', component: SeriesDetailsComponent },
  // Add other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

