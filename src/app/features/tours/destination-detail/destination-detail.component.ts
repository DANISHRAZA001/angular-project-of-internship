import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TourService } from '../../../core/services/tour.service';
import { Destination } from '../../../core/models/tour.model';

@Component({
  selector: 'app-destination-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.css']
})
export class DestinationDetailComponent implements OnInit {
  destination: Destination | undefined;
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private tourService: TourService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.destination = this.tourService.getDestinationBySlug(slug || '');
      this.notFound = !this.destination;
    });
  }
}
