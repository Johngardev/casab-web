import { Component, inject, OnInit } from '@angular/core';
import { EventCardComponent } from '../../components/event-card/event-card.component';
import { MatDialog } from '@angular/material/dialog';
import { EventServiceService } from '../../services/event-service.service';
import { AppEvent } from '../../interfaces/appevent.interface';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [EventCardComponent],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  readonly dialog = inject(MatDialog);
  readonly eventService = inject(EventServiceService);

  event: AppEvent[] = [];
  filteredEvents: AppEvent[] = [];
  selectedCategory: string = 'Todos';

  ngOnInit(): void {
    this.event = this.eventService.getEvents();
    this.filteredEvents = this.event;
  }

  filterEvents(category: string): void {
    this.selectedCategory = category;
    if (category === 'Todos') {
      this.filteredEvents = this.event;
    } else {
      this.filteredEvents = this.event.filter(
        event => event.category?.toLowerCase() === category.toLowerCase()
      );
    }
  }
}