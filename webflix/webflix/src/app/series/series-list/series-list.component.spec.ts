import { Component, OnInit } from '@angular/core';

import { SeriesService } from '../series.service';
import {Series} from '../../models/movie';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  series: Series[] = [];
  selectedSeries: Series | null = null;

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe(
      (series) => this.series = series,
      (error) => console.error('Error fetching series', error)
    );
  }

  onSelectSeries(series: Series): void {
    this.selectedSeries = series;
  }
}

