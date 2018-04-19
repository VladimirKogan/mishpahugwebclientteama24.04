import { Injectable } from '@angular/core';

@Injectable()
export class EventsService {
  eventsInProgress = [];
  eventsPending = [];
  eventsDone = [];

  constructor() { }

  setEventsInProgress (events) {
    events.forEach(a => this.eventsInProgress.push(a));
  }

  getEventsInProgress() {
    return this.eventsInProgress;
  }

  setEventsPending (events) {
    events.forEach(a => this.eventsPending.push(a));
  }

  getEventsPending() {
    return this.eventsPending;
  }

  setEventsDone (events) {
    events.forEach(a => this.eventsDone.push(a));
  }

  getEventsDone () {
    return this.eventsDone;
  }
}
