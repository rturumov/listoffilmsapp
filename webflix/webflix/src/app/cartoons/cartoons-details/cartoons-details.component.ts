import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CartoonsService} from "../cartoons.service";

@Component({
  selector: 'app-cartoons-details',
  templateUrl: './cartoons-details.component.html',
  styleUrl: './cartoons-details.component.css'
})
export class CartoonsDetailsComponent implements OnInit {
  cartoons: any;

  constructor(
    private cartoonsService: CartoonsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const cartoonsId = this.route.snapshot.paramMap.get('cartoons_id');
    if (cartoonsId) {
      this.cartoonsService.getCartoonsDetails(+cartoonsId).subscribe(
        (data) => {
          this.cartoons = {
            ...data,
            genreDisplay: data.genre.map((g: { name: any; }) => g.name).join(', '), // Handles genres
            releaseYear: data.release ? data.release.release : 'Unknown' // Handles release year
          };
        },
        (error) => {
          console.error('Failed to get cartoons details', error);
        }
      );
    }
  }

}
