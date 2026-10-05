import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confirm-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './confirm-payment.component.html',
  styleUrls: ['./confirm-payment.component.css']
})
export class ConfirmPaymentComponent {
  transactionId = '';
  name = '';
  amount = '';
  submitted = false;

  onSubmit(e: Event): void {
    e.preventDefault();
    this.submitted = true;
  }
}
