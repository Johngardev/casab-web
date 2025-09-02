import { Routes } from '@angular/router';
import { LayoutComponent } from './screens/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('./screens/home/home.component').then(c => c.HomeComponent)
      },
      {
        path: 'events',
        loadComponent: () => import('./screens/events/events.component').then(c => c.EventsComponent)
      },
      {
        path: 'about',
        loadComponent: () => import('./screens/about/about.component').then(c => c.AboutComponent)
      },
      {
        path: 'donate',
        loadComponent: () => import('./screens/donate/donate.component').then(c => c.DonateComponent)
      },
      {
        path: 'contact',
        loadComponent: () => import('./screens/contact/contact.component').then(c => c.ContactComponent)
      },
      {
        path: 'gallery',
        loadComponent: () => import('./screens/gallery/gallery.component').then(c => c.GalleryComponent)
      },
      {
        path: 'radio',
        loadComponent: () => import('./screens/radio/radio.component').then(c => c.RadioComponent)
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
