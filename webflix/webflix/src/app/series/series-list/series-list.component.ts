import { Component, OnInit } from '@angular/core';
import { Series } from '../../models/movie';
import {SeriesService} from "../series.service";

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
      (series) => {
        this.series = series.map(series => ({
          ...series,
          genreDisplay: series.genre.map(g => g.name).join(', ')
        }));
      },
      (error) => console.error('Error fetching series', error)
    );
  }

  onSelectSeries(series: Series): void {
    this.selectedSeries = series;
  }
  deselectSeries(): void {
    this.selectedSeries = null;
  }

}


