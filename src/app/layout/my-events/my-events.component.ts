import { Component, OnInit } from '@angular/core';
import {ServerService} from '../../shared/services/server.service';
import {EventsService} from './events.service';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss']
})
export class MyEventsComponent implements OnInit {
  statuses = ['In progress', 'Pending', 'Done'];
  constructor(private server: ServerService,
              private eventsService: EventsService) { }

  events: any;
  eventsInProgress = [];
  eventsPending = [];
  eventsDone = [];

  ngOnInit() {
    const token = localStorage.getItem('token');

    this.server.getMyEvents().subscribe((response) => {
      this.events = response;
      this.eventsInProgress = this.events.filter(a => a.status === 'In progress');
      console.log(this.events);
      this.eventsService.setEventsInProgress(this.eventsInProgress);

      this.eventsPending = this.events.filter(a => a.status === 'Pending');
      this.eventsService.setEventsPending(this.eventsPending);
    //  console.log(this.eventsPending);
    }, error => console.log(error));

    this.server.getHistory(token).subscribe(
      (data) => {
        console.log(data);
        this.events = data;
        this.eventsDone = this.events.filter(a => a.status === 'Done');
        this.eventsService.setEventsDone(this.eventsDone);
      },
      (err) => console.log(err)
    );
  }

}
