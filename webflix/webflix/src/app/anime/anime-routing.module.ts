import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnimeListComponent} from "./anime-list/anime-list.component";
import {AnimeDetailsComponent} from "./anime-details/anime-details.component";

const routes: Routes = [
  { path: '', component: AnimeListComponent },
  { path: ':anime_id', component: AnimeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }
