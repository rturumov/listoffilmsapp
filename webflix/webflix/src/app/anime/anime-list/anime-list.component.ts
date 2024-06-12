import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../anime.service';
import { Anime } from '../../models/movie';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {
  anime: Anime[] = [];
  selectedAnime: Anime | null = null;

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animeService.getAnime().subscribe(
      (anime) => {
        this.anime = anime.map(anime => ({
          ...anime,
          genreDisplay: anime.genre.map(g => g.name).join(', ')
        }));
      },
      (error) => console.error('Error fetching anime', error)
    );
  }

  onSelectAnime(anime: Anime): void {
    this.selectedAnime = anime;
  }
  deselectAnime(): void {
    this.selectedAnime = null;
  }

}


