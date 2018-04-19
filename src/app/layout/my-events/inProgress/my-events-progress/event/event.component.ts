import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event;
  isShownSub = false;
  constructor() { }

  ngOnInit() {}

  showSubscribers() {
    this.isShownSub = !this.isShownSub;
  }

  getBtnName() {
    return this.isShownSub ? 'Hide subscribers' : 'Show subscribers';
  }

}
