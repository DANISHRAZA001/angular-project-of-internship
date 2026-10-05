import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TourService } from '../../core/services/tour.service';
import { FeaturedCard, Tour } from '../../core/models/tour.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredCards: FeaturedCard[] = [];
  searchQuery = '';
  searchDate = '';
  searchPersons = '2 Persons';
  searchResults: Tour[] = [];
  showResults = false;
  searchSubmitted = false;

  constructor(private tourService: TourService) { }

  ngOnInit(): void {
    this.featuredCards = this.tourService.getFeaturedCards();
  }

  onSearch(e: Event): void {
    e.preventDefault();
    const q = this.searchQuery.trim();
    if (!q) return;
    this.searchResults = this.tourService.searchTours(q);
    this.showResults = true;
    this.searchSubmitted = true;
  }

  closeResults(): void {
    this.showResults = false;
    this.searchQuery = '';
  }
}
