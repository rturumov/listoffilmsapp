import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  declarations: [
    MoviesListComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }

