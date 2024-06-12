import { Component, OnInit } from '@angular/core';
import {Cartoons} from '../../models/movie';
import {CartoonsService} from "../cartoons.service";


@Component({
  selector: 'app-cartoons-list',
  templateUrl: './cartoons-list.component.html',
  styleUrls: ['./cartoons-list.component.css']
})
export class CartoonsListComponent implements OnInit {
  cartoons: Cartoons[] = [];
  selectedCartoons: Cartoons | null = null;
  filteredCartoons: Cartoons[] = []; // Initialize the array
  selectedGenres: string[] = []; // Specify the type as string[]

  constructor(private cartoonsService: CartoonsService) {}

  ngOnInit(): void {
    this.cartoonsService.getCartoons().subscribe(
      (cartoons) => {
        this.cartoons = cartoons.map(cartoons => ({
          ...cartoons,
          genreDisplay: cartoons.genre.map(g => g.name).join(', ')
        }));
        // Initialize filteredCartoons with all cartoons initially
        this.filteredCartoons = this.cartoons;
      },
      (error) => console.error('Error fetching cartoons', error)
    );
  }

  onSelectCartoons(cartoons: Cartoons): void {
    this.selectedCartoons = cartoons;
  }

  deselectCartoons(): void {
    this.selectedCartoons = null;
  }

  // Method to filter cartoons based on selected genres
  filterCartoonsByGenre(): void {
    // If no genres are selected, reset to show all cartoons
    if (this.selectedGenres.length === 0) {
      this.filteredCartoons = this.cartoons;
    } else {
      // Filter cartoons based on selected genres
      this.filteredCartoons = this.cartoons.filter(cartoon => {
        return this.selectedGenres.every((selectedGenre: string) =>
          cartoon.genre.some(genre => genre.name === selectedGenre)
        );
      });
    }
  }

  // Method to toggle selection of genre
  toggleGenreSelection(genre: string): void {
    const index = this.selectedGenres.indexOf(genre);
    if (index !== -1) {
      // If genre is already selected, remove it
      this.selectedGenres.splice(index, 1);
    } else {
      // If genre is not selected, add it
      this.selectedGenres.push(genre);
    }
    // Call filter method to update filtered cartoons
    this.filterCartoonsByGenre();
  }
}