
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon } from "@angular/material/icon";

interface CalendarEvent {
  event_date: Date;
  event_title: string;
  event_theme: string;
}

interface ThemeOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatIcon, FormsModule],
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {
  // Estado de reproducción en vivo
  isLive = true;
  currentTrack = 'Aroma de falso amor - Oscar Mulero';

  readonly MONTH_NAMES = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  readonly DAYS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  // Variables de estado del calendario
  month: number = 0;
  year: number = 2026;
  no_of_days: number[] = [];
  blankdays: number[] = [];

  // Eventos de programación
  events: CalendarEvent[] = [
    {
      event_date: new Date(2026, 3, 1),
      event_title: "Apertura de Sesión DJ Set",
      event_theme: 'blue'
    },
    {
      event_date: new Date(2026, 3, 10),
      event_title: "Especial Vinilos",
      event_theme: 'red'
    },
    {
      event_date: new Date(2026, 3, 16),
      event_title: "Transmisión en Vivo Casa B",
      event_theme: 'green'
    }
  ];

  // Formulario del Modal
  openEventModal = false;
  event_title = '';
  event_date = '';
  event_theme = 'blue';

  themes: ThemeOption[] = [
    { value: "blue", label: "Azul (Tema)" },
    { value: "red", label: "Rojo (Tema)" },
    { value: "yellow", label: "Amarillo (Tema)" },
    { value: "green", label: "Verde / CasaB (Tema)" },
    { value: "purple", label: "Morado (Tema)" }
  ];

  ngOnInit(): void {
    this.initDate();
    this.getNoOfDays();
  }

  initDate(): void {
    const today = new Date();
    this.month = today.getMonth();
    this.year = today.getFullYear();
  }

  isToday(date: number): boolean {
    const today = new Date();
    const d = new Date(this.year, this.month, date);
    return today.toDateString() === d.toDateString();
  }

  getNoOfDays(): void {
    let daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
    let dayOfWeek = new Date(this.year, this.month).getDay();
    
    let blankdaysArray: number[] = [];
    for (let i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i);
    }

    let daysArray: number[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }
    
    this.blankdays = blankdaysArray;
    this.no_of_days = daysArray;
  }

  changeMonth(val: number): void {
    if (val === -1 && this.month > 0) {
      this.month--;
    } else if (val === 1 && this.month < 11) {
      this.month++;
    }
    this.getNoOfDays();
  }

  showEventModal(date: number): void {
    this.openEventModal = true;
    this.event_date = new Date(this.year, this.month, date).toDateString();
  }

  filterEventsForDate(date: number) {
    const targetDate = new Date(this.year, this.month, date).toDateString();
    return this.events.filter(e => new Date(e.event_date).toDateString() === targetDate);
  }

  addEvent(): void {
    if (!this.event_title.trim()) return;

    this.events.push({
      event_date: new Date(this.event_date),
      event_title: this.event_title,
      event_theme: this.event_theme
    });

    // Limpiar formulario y cerrar modal
    this.event_title = '';
    this.event_date = '';
    this.event_theme = 'blue';
    this.openEventModal = false;
  }
}
