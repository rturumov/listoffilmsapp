import { Component, OnInit } from '@angular/core';
import { CartoonsService } from '../cartoons.service';
import { Cartoons } from '../../models/movie';

@Component({
  selector: 'app-cartoons-list',
  templateUrl: './cartoons-list.component.html',
  styleUrls: ['./cartoons-list.component.css']
})
export class CartoonsListComponent implements OnInit {
  cartoons: Cartoons[] = [];
  selectedCartoons: Cartoons | null = null;

  constructor(private cartoonsService: CartoonsService) {}

  ngOnInit(): void {
    this.cartoonsService.getCartoons().subscribe(
      (cartoons) => this.cartoons = cartoons,
      (error) => console.error('Error fetching cartoons', error)
    );
  }

  onSelectCartoons(cartoons: Cartoons): void {
    this.selectedCartoons = cartoons;
  }
}

