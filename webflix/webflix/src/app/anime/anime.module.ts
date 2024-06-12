import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { AnimeRoutingModule } from './anime-routing.module';

@NgModule({
  declarations: [
    AnimeListComponent,
    AnimeDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AnimeRoutingModule
  ]
})
export class AnimeModule { }
