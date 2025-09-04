
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatIcon],
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {
  // Estado de reproducción en vivo
  isLive = true;
  currentTrack = 'Aroma de falso amor - Oscar Mulero';

  // Días y horas
  days: string[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  hours: string[] = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  // Programación de ejemplo (day->hour->texto)
  // Puedes reemplazarlo por datos reales más adelante
  schedule: Record<string, Record<string, string>> = {
    Lunes: {
      '10:00': 'Audit current product page check out process',
      '13:00': 'Audit current product page…',
      '16:00': 'Audit current product page…',
      '19:00': 'Audit current product page…'
    },
    Martes: {
      '11:00': 'Mockup feature designs',
      '14:00': 'Insert text here',
      '16:00': 'Insert text here',
      '17:00': 'Insert text here',
      '19:00': 'Insert text here',
      '20:00': 'Insert text here'
    },
    Miercoles: {
      '09:00': 'Prototyping',
      '11:00': 'Develop sitemap',
      '14:00': 'Mockup feature designs',
      '16:00': 'Develop sitemap',
      '19:00': 'Develop sitemap'
    },
    Jueves: {
      '10:00': 'Address feedback from client about deliverables',
      '13:00': 'Address feedback from…',
      '16:00': 'Address feedback from…',
      '19:00': 'Address feedback from…'
    },
    Viernes: {
      '09:00': 'Feedback',
      '11:00': 'Messaging docs',
      '16:00': 'Test check out button',
      '19:00': 'Test check out button'
    },
    Sabado: {
      '09:00': 'Testing',
      '11:00': 'Insert text here',
      '12:00': 'Release',
      '15:00': 'Testing',
      '18:00': 'Testing'
    },
    Domingo: {
      '09:00': 'Release',
      '12:00': 'Release',
      '15:00': 'Release',
      '18:00': 'Release'
    }
  };

  getCell(day: string, hour: string): string | undefined {
    return this.schedule[day]?.[hour];
  }
}
