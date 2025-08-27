import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogTitle, MatDialogRef, MatDialogActions } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

export interface EventData {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
}

@Component({
  selector: 'app-show-event-details',
  standalone: true,
  imports: [MatDialogTitle, MatIcon, MatDialogActions],
  templateUrl: './show-event-details.component.html',
  styleUrl: './show-event-details.component.css'
})
export class ShowEventDetailsComponent {
  event: EventData;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { event: EventData }, public dialogRef: MatDialogRef<ShowEventDetailsComponent>) {
    this.event = data.event;
  }

}
