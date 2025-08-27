import { Routes } from '@angular/router';
import { LayoutComponent } from './screens/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
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
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  },
  
];
