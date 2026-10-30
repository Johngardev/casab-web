
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon } from "@angular/material/icon";
import { EventServiceService } from '../../services/event-service.service';
import { AppEvent } from '../../interfaces/appevent.interface';

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

  readonly eventService = inject(EventServiceService);

  readonly MONTH_NAMES = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  readonly DAYS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  // Variables de estado del calendario
  month: number = 0;
  year: number = 2026;
  years: number[] = [];
  no_of_days: number[] = [];
  blankdays: number[] = [];

  // Eventos de programación
  events: AppEvent[] = []

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
    this.generateYears();
    this.loadEvents();
    this.getNoOfDays();
  }

  initDate(): void {
    const today = new Date();
    this.month = today.getMonth();
    this.year = today.getFullYear();
  }

  loadEvents(): void {
    this.events = this.eventService.getEvents();
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

  generateYears(): void {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 5; // Puedes ajustarlo si necesitas más años hacia atrás
    const endYear = currentYear + 5;   // Años hacia adelante
    
    this.years = [];
    for (let i = startYear; i <= endYear; i++) {
      this.years.push(i);
    }
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
    return this.events.filter(e => {
      const eventDateObj = typeof e.date === 'string' ? new Date(e.date) : e.date;
      return eventDateObj.toDateString() === targetDate;
    });
  }

  addEvent(): void {
    if (!this.event_title.trim()) return;

    // Guardar a través del servicio
    this.eventService.addEvent({
      title: this.event_title,
      imageUrl: '/assets/casab.jpg', // Imagen por defecto o seleccionable
      date: new Date(this.event_date),
      location: 'Casa B',
      event_theme: this.event_theme
    });

    // Recargar eventos locales
    this.loadEvents();

    // Limpiar formulario y cerrar modal
    this.event_title = '';
    this.event_date = '';
    this.event_theme = 'blue';
    this.openEventModal = false;
  }

  onYearChange(): void {
    this.getNoOfDays();
  }
}
