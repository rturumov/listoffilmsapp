import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SeriesService} from "../series.service";

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css']
})
export class SeriesDetailsComponent implements OnInit {
  series: any;

  constructor(
    private seriesService: SeriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const seriesId = this.route.snapshot.paramMap.get('series_id');
    if (seriesId) {
      this.seriesService.getSeriesDetails(+seriesId).subscribe(
        (data) => {
          this.series = {
            ...data,
            genreDisplay: data.genre.map((g: { name: any; }) => g.name).join(', '), // Handles genres
            releaseYear: data.release ? data.release.release : 'Unknown' // Handles release year
          };
        },
        (error) => {
          console.error('Failed to get series details', error);
        }
      );
    }
  }

}

