import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pending-event',
  templateUrl: './pending-event.component.html',
  styleUrls: ['./pending-event.component.scss']
})
export class PendingEventComponent implements OnInit {
  @Input() event;
  isShownSub = false;
  constructor() { }

  ngOnInit() {}

  right(element: HTMLBaseElement) {
    return {
      'right' : false,
      'col-12' : true
      //  'right' : true
    }
  }

  showSubscribers() {
    // checking token???
    this.isShownSub = !this.isShownSub;
  }

  getBtnName() {
    return this.isShownSub ? 'Hide invited people' : 'Show invited people';
  }

}
