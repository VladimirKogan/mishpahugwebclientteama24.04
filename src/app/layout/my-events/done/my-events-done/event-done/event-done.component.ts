import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-done',
  templateUrl: './event-done.component.html',
  styleUrls: ['./event-done.component.scss']
})
export class EventDoneComponent implements OnInit {
@Input() event;
  constructor() { }

  ngOnInit() {
  }

  right(element: HTMLBaseElement) {
    return {
      'right' : false,
      'col-12' : true,
    }
  }

}
