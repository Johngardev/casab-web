import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventCardComponent } from '../../components/event-card/event-card.component';
import { EventServiceService } from '../../services/event-service.service';
import { Event } from '../../interfaces/event.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, EventCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly eventService = inject(EventServiceService);

  eventosProximos: Event[] = [];

  testimonios = [
    {
      text: "Un lugar mágico donde la música y el arte se encuentran. La energía de los eventos es inigualable.",
      author: "- Sofía G."
    },
    {
      text: "El proyecto de la reserva natural demuestra un compromiso real con el planeta. ¡Me siento orgulloso de apoyar a Casa B!",
      author: "- Juan M."
    },
    {
      text: "Cada evento es una nueva aventura. He descubierto artistas increíbles y conocido gente maravillosa.",
      author: "- Laura P."
    }
  ];

  ngOnInit(): void {
    const all = this.eventService.getEvents();
    this.eventosProximos = all.slice().sort((a,b) => this.parseSpanishDate(a.date).getTime() - this.parseSpanishDate(b.date).getTime()).slice(0, 3);
  }

  private parseSpanishDate(dateStr: string): Date {
    // Espera formato: "28 de Septiembre"
    const monthMap: Record<string, number> = {
      'enero': 0,
      'febrero': 1,
      'marzo': 2,
      'abril': 3,
      'mayo': 4,
      'junio': 5,
      'julio': 6,
      'agosto': 7,
      'septiembre': 8,
      'octubre': 9,
      'noviembre': 10,
      'diciembre': 11,
    };

  const parts = dateStr.toLowerCase().split(' ').filter(Boolean);
  const day = parseInt(parts[0], 10);
  const month = monthMap[parts[2]];
  const year = new Date().getFullYear();

  return new Date(year, month, day);
  }

  
}
