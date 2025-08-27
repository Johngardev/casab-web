import { Component, inject, OnInit } from '@angular/core';
import { EventCardComponent } from '../../components/event-card/event-card.component';
import { MatDialog } from '@angular/material/dialog';
import { EventServiceService } from '../../services/event-service.service';
import { Event } from '../../interfaces/event.interface';

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

  event: Event[] = [];

  ngOnInit(): void {
    this.event = this.eventService.getEvents();
  }
}