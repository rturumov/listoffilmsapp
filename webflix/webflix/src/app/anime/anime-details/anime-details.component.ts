import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent implements OnInit {
  anime: any;

  constructor(
    private animeService: AnimeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const animeId = this.route.snapshot.paramMap.get('anime_id');
    if (animeId) {
      this.animeService.getAnimeDetails(+animeId).subscribe(
        (data) => {
          this.anime = {
            ...data,
            genreDisplay: data.genre.map((g: { name: any; }) => g.name).join(', '), // Handles genres
            releaseYear: data.release ? data.release.release : 'Unknown' // Handles release year
          };
        },
        (error) => {
          console.error('Failed to get anime details', error);
        }
      );
    }
  }

}

