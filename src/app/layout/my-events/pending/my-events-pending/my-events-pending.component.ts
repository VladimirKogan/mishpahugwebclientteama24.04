import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../events.service';

@Component({
  selector: 'app-my-events-pending',
  templateUrl: './my-events-pending.component.html',
  styleUrls: ['./my-events-pending.component.scss']
})
export class MyEventsPendingComponent implements OnInit {

  constructor(private eventsService: EventsService) { }
  events = [];

  ngOnInit() {
    this.events = this.eventsService.getEventsPending();
  }

}
