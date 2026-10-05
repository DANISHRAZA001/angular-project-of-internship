import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name = '';
  email = '';
  phone = '';
  subject = '';
  message = '';
  submitted = false;
  loading = false;

  onSubmit(e: Event): void {
    e.preventDefault();
    this.loading = true;
    // Simulate form submission
    setTimeout(() => {
      this.loading = false;
      this.submitted = true;
      this.name = '';
      this.email = '';
      this.phone = '';
      this.subject = '';
      this.message = '';
    }, 1200);
  }
}
