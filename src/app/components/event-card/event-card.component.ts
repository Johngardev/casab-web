import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { ShowEventDetailsComponent } from './show-event-details/show-event-details.component';


@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {

  @Input() eventData!: { id: number; title: string; imageUrl: string; date: string; location: string; };

  readonly dialog = inject(MatDialog);
  
  constructor() {}

  showEventDetails(){
    this.dialog.open(ShowEventDetailsComponent, {
      width: '400px',
      height: '400px',
      data: { event: this.eventData }
    });
  }

}