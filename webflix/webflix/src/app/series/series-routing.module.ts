import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SeriesDetailsComponent} from "./series-details/series-details.component";
import {SeriesListComponent} from "./series-list/series-list.component";

const routes: Routes = [
  { path: '', component: SeriesListComponent },
  { path: ':movie_id', component: SeriesDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }

