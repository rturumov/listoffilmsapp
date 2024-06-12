import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartoonsListComponent} from "./cartoons-list/cartoons-list.component";
import {CartoonsDetailsComponent} from "./cartoons-details/cartoons-details.component";

const routes: Routes = [
  { path: '', component: CartoonsListComponent },
  { path: ':cartoons_id', component: CartoonsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartoonsRoutingModule { }
