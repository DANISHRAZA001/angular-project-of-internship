import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  posts = [
    {
      title: 'Top 10 Reasons to Visit Hunza Valley in 2025',
      date: 'March 15, 2025',
      author: 'Pakistan Road Trips Team',
      category: 'Travel Tips',
      img: '/assets/pics/Fairy Meadows Hunza Tour.webp',
      excerpt: 'Hunza Valley is one of Pakistan\'s most stunning destinations. From the turquoise Attabad Lake to the ancient Baltit Fort, discover why millions of tourists are choosing Hunza as their next adventure destination.'
    },
    {
      title: 'A Complete Guide to Fairy Meadows Trek',
      date: 'February 28, 2025',
      author: 'Adil Khan',
      category: 'Adventure',
      img: '/assets/pics/Fairy Meadows 5Days Tour.webp',
      excerpt: 'Trekking to Fairy Meadows is a dream for many adventurers. This complete guide covers everything — the best time to visit, the jeep ride to Raikot Bridge, the trek through pine forests, and camping tips at the meadow.'
    },
    {
      title: 'Skardu vs Hunza: Which is Better?',
      date: 'January 10, 2025',
      author: 'Travel Experts',
      category: 'Comparison',
      img: '/assets/pics/skardu-valley.webp',
      excerpt: 'Both Skardu and Hunza offer world-class scenery. But which destination is right for you? We compare both in terms of attractions, accessibility, food, accommodation, and overall experience.'
    },
    {
      title: 'Pakistan\'s Hidden Gem: Kumrat Valley',
      date: 'December 5, 2024',
      author: 'Sara Ahmed',
      category: 'Discover',
      img: '/assets/pics/kumrat-valley.webp',
      excerpt: 'While Hunza and Skardu get all the attention, Kumrat Valley quietly waits to be discovered. Dense deodar forests, crystal-clear rivers, and the magical Jahaz Banda meadow make it one of Pakistan\'s most underrated gems.'
    },
  ];
}
