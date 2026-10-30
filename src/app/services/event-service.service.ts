import { Injectable } from '@angular/core';
import { AppEvent } from '../interfaces/appevent.interface';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  private events: AppEvent[] = [
    {
      id: 1,
      title: 'Festival de Música Electrónica',
      imageUrl: '/assets/casab.jpg',
      date: new Date(2026, 8, 28), // Usar objetos Date reales facilita la validación
      location: 'Casa B',
      category: 'Musica',
      event_theme: 'blue'
    },
    {
      id: 2,
      title: 'Exposición de Arte "Renacer"',
      imageUrl: '/assets/casab.jpg',
      date: new Date(2026, 9, 10),
      location: 'Casa B Galería',
      category: 'Arte',
      event_theme: 'red'
    },
    {
      id: 3,
      title: 'Noche de Cine Independiente',
      imageUrl: '/assets/casab.jpg',
      date: new Date(2026, 9, 15),
      location: 'Casa B Cine',
      category: 'Cine',
      event_theme: 'green'
    }
  ];

  constructor() { }

  getEvents(): AppEvent[] {
    return this.events;
  }

  getEventById(id: number): AppEvent | undefined {
    return this.events.find(event => event.id === id);
  }

  addEvent(newEvent: Omit<AppEvent, 'id'>): void {
    const id = this.events.length > 0 ? Math.max(...this.events.map(event => event.id)) + 1 : 1;
    this.events.push({ id, ...newEvent });
  }
}
