import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuOpen = false;

  destinations = [
    { emoji: '🏔️', label: 'Astore Valley',       slug: 'astore-valley' },
    { emoji: '🌿', label: 'Fairy Meadows',         slug: 'fairy-meadows' },
    { emoji: '🏞️', label: 'Hunza Valley',          slug: 'hunza-valley' },
    { emoji: '⛰️', label: 'K2 Base Camp',          slug: 'k2' },
    { emoji: '🌲', label: 'Kumrat Valley',          slug: 'kumrat-valley' },
    { emoji: '🎭', label: 'Kalash Valley Chitral',  slug: 'kalash-valley' },
    { emoji: '💧', label: 'Naran Kaghan',           slug: 'naran-kaghan' },
    { emoji: '🌊', label: 'Neelum Valley',          slug: 'neelum-valley' },
    { emoji: '🏔️', label: 'Skardu Valley',         slug: 'skardu-valley' },
    { emoji: '🌄', label: 'Shogran Valley',         slug: 'shogran-valley' },
    { emoji: '🌸', label: 'Swat Valley',            slug: 'swat-valley' },
    { emoji: '🌈', label: 'Umbrella Waterfall',     slug: 'umbrella-waterfall' },
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}

