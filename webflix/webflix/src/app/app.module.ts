import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { AnimeDetailsComponent } from './anime/anime-details/anime-details.component';
import { AnimeListComponent } from './anime/anime-list/anime-list.component';
import { SeriesListComponent } from './series/series-list/series-list.component';
import { SeriesDetailsComponent } from './series/series-details/series-details.component';
import {CommonModule} from "@angular/common";
import { FormsModule } from '@angular/forms';
import { CartoonsListComponent } from './cartoons/cartoons-list/cartoons-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimeDetailsComponent,
    AnimeListComponent,
    SeriesListComponent,
    SeriesDetailsComponent,
    CartoonsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesModule,
    CommonModule,
    FormsModule
    // Add the movies module here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

