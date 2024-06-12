import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {CartoonsRoutingModule} from "./cartoons-routing.module";
import {CartoonsDetailsComponent} from "./cartoons-details/cartoons-details.component";
import {CartoonsListComponent} from "./cartoons-list/cartoons-list.component";

@NgModule({
  declarations: [
    CartoonsListComponent,
    CartoonsDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CartoonsRoutingModule
  ]
})
export class CartoonsModule { }
