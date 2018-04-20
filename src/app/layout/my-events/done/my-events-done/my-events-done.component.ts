import { Component, OnInit } from '@angular/core';
import {ServerService} from '../../../../shared/services/server.service';
import {EventsService} from '../../events.service';

@Component({
  selector: 'app-my-events-done',
  templateUrl: './my-events-done.component.html',
  styleUrls: ['./my-events-done.component.scss']
})
export class MyEventsDoneComponent implements OnInit {

  events = [];
  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.events = this.eventsService.getEventsDone();
  }
}
