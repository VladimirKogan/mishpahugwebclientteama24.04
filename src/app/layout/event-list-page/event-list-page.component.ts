import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event-list-page',
  templateUrl: './event-list-page.component.html',
  styleUrls: ['./event-list-page.component.scss']
})
export class EventListPageComponent implements OnInit {

  events = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  constructor(private router: Router) {
  }

  ngOnInit() {
   localStorage.setItem('token', 'asdfasdfasdf');
   // localStorage.removeItem('token');
  }

  goToEvent() {
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['event']);
    }
  }
}
