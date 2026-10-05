import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TourService } from '../../core/services/tour.service';
import { Tour } from '../../core/models/tour.model';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  destinations: Tour[] = [];

  destinationCards = [
    { slug: 'astore-valley', name: 'Astore Valley', img: '/assets/pics/Astore-valley.webp', tags: ['Gilgit-Baltistan', 'Trekking', 'Nature'], desc: 'Embark on a mesmerizing adventure with our exclusive Astore Valley tour packages. Nestled in Gilgit-Baltistan, Astore Valley is blessed with lush green meadows, glacial rivers, and stunning Himalayan vistas that will leave you speechless.' },
    { slug: 'fairy-meadows', name: 'Fairy Meadows', img: '/assets/pics/Fairy Meadows 5Days Tour.webp', tags: ['Gilgit-Baltistan', 'Camping', 'Himalayas'], desc: 'Fairy Meadows, nestled in the heart of Pakistan\'s majestic Himalayas, offers an enchanting escape into nature\'s embrace. Situated at the base of Nanga Parbat — the world\'s 9th highest peak — it is one of Pakistan\'s most iconic destinations.' },
    { slug: 'hunza-valley', name: 'Hunza Valley', img: '/assets/pics/Fairy Meadows Hunza Tour.webp', tags: ['Gilgit-Baltistan', 'Culture', 'Scenic'], desc: 'Discover the enchanting beauty of Hunza Valley with our all-inclusive tour packages. Immerse yourself in breathtaking landscapes, ancient forts like Baltit and Altit, and experience the warmth of the local Hunzai culture.' },
    { slug: 'k2', name: 'K2 Base Camp', img: '/assets/pics/Fairy Meadows Skardu Excursion.webp', tags: ['Karakoram', 'Adventure', 'Trekking'], desc: 'Discover the towering majesty of the world\'s second-highest peak and immerse yourself in the breathtaking landscapes of the Karakoram Range. Our K2 tour package is the ultimate adventure for serious trekkers and mountain lovers.' },
    { slug: 'kumrat-valley', name: 'Kumrat Valley', img: '/assets/pics/kumrat-valley.webp', tags: ['KPK', 'Hidden Gem', 'Forest'], desc: 'Discover the extraordinary beauty of Kumrat Valley — a hidden gem in Dir Kohistan. Its vibrant culture, dense pine forests, crystal-clear rivers, and warm hospitality make it a perfect off-the-beaten-path destination for nature lovers.' },
    { slug: 'kalash-valley', name: 'Kalash Valley Chitral', img: '/assets/pics/kalash-valley.webp', tags: ['Chitral', 'Culture', 'Festivals'], desc: 'Book your tour package and let the fairy-tale come to life in Kalash Valley. Home to the ancient Kalash tribe, this valley is famous for its colorful festivals, unique traditions, wooden temples, and stunning Hindukush scenery.' },
    { slug: 'naran-kaghan', name: 'Naran Kaghan Valley', img: '/assets/pics/naran-kaghan.webp', tags: ['KPK', 'Lakes', 'Mountains'], desc: 'Explore ancient forts, crystal-clear lakes like Saiful Muluk, and towering mountains while experiencing the unique traditions of local communities. Naran Kaghan is Pakistan\'s most beloved summer retreat.' },
    { slug: 'neelum-valley', name: 'Neelum Valley', img: '/assets/pics/neelum-valley.webp', tags: ['AJK', 'River', 'Forests'], desc: 'Unveil the secrets of Neelum Valley — Azad Kashmir\'s crown jewel. Named after the turquoise Neelum River, this valley stretches 200 km along dense forests, roaring waterfalls, and charming villages that feel untouched by time.' },
    { slug: 'skardu-valley', name: 'Skardu Valley', img: '/assets/pics/skardu-valley.webp', tags: ['Gilgit-Baltistan', 'Lakes', 'Desert'], desc: 'Book your unforgettable journey to Skardu Valley — the gateway to the world\'s highest peaks. Home to Shangrila Resort, Deosai Plains, Upper Kachura Lake, and the ancient Skardu Fort, it\'s a destination unlike any other.' },
    { slug: 'shogran-valley', name: 'Shogran Valley', img: '/assets/pics/shogran-valley.webp', tags: ['KPK', 'Meadows', 'Family'], desc: 'From nature escapes to adventurous treks, family fun, and photography expeditions, our Shogran Valley tour packages offer a seamless exploration of this serene Himalayan paradise. Enjoy 360° mountain views from Pakistan\'s most scenic plateau.' },
    { slug: 'swat-valley', name: 'Swat Valley', img: '/assets/pics/swat-valley.webp', tags: ['KPK', 'Switzerland of East', 'History'], desc: 'Explore the serene beauty of Swat Valley — often called the "Switzerland of the East." Book your Swat Valley tour today and embark on a remarkable journey of natural wonders, Buddhist ruins, lush green landscapes, and cultural treasures.' },
    { slug: 'umbrella-waterfall', name: 'Umbrella Waterfall', img: '/assets/pics/umbrella-waterfall.webp', tags: ['Islamabad', 'Day Trip', 'Waterfall'], desc: 'Don\'t miss this extraordinary experience near Islamabad. The Umbrella Waterfall cascades in a unique umbrella shape through lush green hills — perfect for a refreshing day or overnight trip from the twin cities.' },
  ];

  constructor(private tourService: TourService) { }
  ngOnInit(): void { }
}
