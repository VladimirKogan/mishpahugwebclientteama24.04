import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../events.service';

@Component({
  selector: 'app-my-events-progress',
  templateUrl: './my-events-progress.component.html',
  styleUrls: ['./my-events-progress.component.scss']
})
export class MyEventsProgressComponent implements OnInit {

  constructor(private eventsService: EventsService) { }

  events = [];
  ngOnInit() {
    this.events = this.eventsService.getEventsInProgress();
  }

}
