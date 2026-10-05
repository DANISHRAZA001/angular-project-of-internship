import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourService } from '../../core/services/tour.service';
import { Activity } from '../../core/models/tour.model';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  activities: Activity[] = [];

  constructor(private tourService: TourService) {}

  ngOnInit(): void {
    this.activities = this.tourService.getAllActivities();
  }
}
