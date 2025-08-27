import { Injectable } from '@angular/core';
import { Event } from '../interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  private events: Event[] = [
    {
      id: 1,
      title: 'Festival de Música Electrónica',
      imageUrl: '/assets/casab.jpg',
      date: '28 de Septiembre',
      location: 'Casa B'
    },
    {
      id: 2,
      title: 'Exposición de Arte "Renacer"',
      imageUrl: '/assets/casab.jpg',
      date: '10 de Octubre',
      location: 'Casa B Galería'
    },
    {
      id: 3,
      title: 'Noche de Cine Independiente',
      imageUrl: '/assets/casab.jpg',
      date: '15 de Octubre',
      location: 'Casa B Cine'
    },
    {
      id: 4,
      title: 'Taller de Sostenibilidad',
      imageUrl: '/assets/casab.jpg',
      date: '20 de Octubre',
      location: 'Reserva Natural'
    },
    {
      id: 5,
      title: 'Noche de Poesía y Erotismo',
      imageUrl: '/assets/casab.jpg',
      date: '25 de Octubre',
      location: 'Casa B Café'
    },
    {
      id: 6,
      title: 'Expo de Moda',
      imageUrl: '/assets/casab.jpg',
      date: '20 de Septiembre',
      location: 'Casa B'
    }
  ];

  constructor() { }

  getEvents(): Event[] {
    return this.events;
  }

  getEventById(id: number): Event | undefined {
    return this.events.find(event => event.id === id);
  }
}
