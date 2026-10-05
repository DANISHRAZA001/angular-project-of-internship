import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { TourService } from '../../core/services/tour.service';
import { Package } from '../../core/models/tour.model';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  packages: Package[] = [];
  selectedPackage: Package | null = null;
  showModal = false;

  // Booking form fields
  bookingName = '';
  bookingEmail = '';
  bookingPhone = '';
  bookingDate = '';
  bookingPersons = 2;
  bookingNotes = '';
  bookingSuccess = false;
  submitting = false;

  private readonly webhookUrl = 'https://hook.eu1.make.com/wvessaykyxxxsxds356bnp31856tx7k0';

  constructor(
    private tourService: TourService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.packages = this.tourService.getAllPackages();
  }

  openBooking(pkg: Package): void {
    this.selectedPackage = pkg;
    this.showModal = true;
    this.bookingSuccess = false;
    this.submitting = false;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedPackage = null;
    this.resetForm();
  }

  submitBooking(): void {
    if (this.submitting || !this.selectedPackage) return;

    this.submitting = true;

    const payload = {
      name: this.bookingName,
      email: this.bookingEmail,
      phone: this.bookingPhone,
      travelDate: this.bookingDate,
      persons: this.bookingPersons,
      notes: this.bookingNotes,
      packageName: this.selectedPackage.name,
      packagePrice: this.selectedPackage.price,
      packageDuration: this.selectedPackage.duration,
      bookedAt: new Date().toISOString()
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post(this.webhookUrl, payload, { headers, responseType: 'text' }).subscribe({
      next: () => {
        this.bookingSuccess = true;
        this.submitting = false;
        alert('🎉 Your booking has been confirmed! Please proceed to make the payment to secure your spot.');
        setTimeout(() => this.closeModal(), 3000);
      },
      error: (err) => {
        this.submitting = false;
        console.error('Webhook error:', err);
        alert('⚠️ Something went wrong while sending your booking. Please try again or contact us directly.');
      }
    });
  }

  private resetForm(): void {
    this.bookingName = '';
    this.bookingEmail = '';
    this.bookingPhone = '';
    this.bookingDate = '';
    this.bookingPersons = 2;
    this.bookingNotes = '';
  }
}
