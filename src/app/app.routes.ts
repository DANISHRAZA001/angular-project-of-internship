import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ToursComponent } from './features/tours/tours.component';
import { DestinationDetailComponent } from './features/tours/destination-detail/destination-detail.component';
import { PackagesComponent } from './features/packages/packages.component';
import { ActivityComponent } from './features/activity/activity.component';
import { BlogComponent } from './features/blog/blog.component';
import { ContactComponent } from './features/contact/contact.component';
import { ConfirmPaymentComponent } from './features/confirm-payment/confirm-payment.component';

export const routes: Routes = [
  { path: '',         component: HomeComponent },
  { path: 'tours',    component: ToursComponent },
  { path: 'tours/:slug', component: DestinationDetailComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'blog',     component: BlogComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'payment',  component: ConfirmPaymentComponent },
  { path: '**',       redirectTo: '' },
];
