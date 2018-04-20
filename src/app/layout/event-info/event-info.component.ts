import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ServerService} from '../../shared/services/server.service';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.scss']
})
export class EventInfoComponent implements OnInit {
  eventId = 0;
  picture = '';
  title = '';
  holiday = '';
  rate = 0.0;
  date = '';
  place = '';
  time = '19:00';
  description = '';

  constructor(private server: ServerService, public dialogRef: MatDialogRef<EventInfoComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.eventId = this.data.eventId;
    this.picture = this.data.picture;
    this.rate = this.data.rate;
    this.title = this.data.title;
    this.holiday = this.data.holiday;
    this.date = this.data.date;
    this.place = this.data.city;
    this.description = this.data.description;
    // console.log(this.data);
  }

  joinToEvent() {
    // join to event
    console.log('Join to event ' + this.eventId);
    this.server.subscriveToEvent(this.eventId).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      });
  }
}
