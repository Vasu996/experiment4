import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },         // Default route
  { path: 'about', component: AboutComponent },   // About route
  { path: 'contact', component: ContactComponent }, // Contact route
];


