import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-list-page',
  templateUrl: './event-list-page.component.html',
  styleUrls: ['./event-list-page.component.scss']
})
export class EventListPageComponent implements OnInit {

  events = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  rowsQuantity = this.getRowsQuantity(this.events.length);

  private getRowsQuantity(length) {
    return length % 4 === 0 ? length / 4 : length / 4 + 1;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
