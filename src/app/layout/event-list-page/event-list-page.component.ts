import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../../shared/services/http.service';
import {EventListCardModel} from '../../shared/models/evnt-list-card.model';

@Component({
  selector: 'app-event-list-page',
  templateUrl: './event-list-page.component.html',
  styleUrls: ['./event-list-page.component.scss']
})
export class EventListPageComponent implements OnInit {
  eventCards: EventListCardModel[] = [];

  events = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  postData = {
    city: 'Tel Aviv-Yafo',
    place_id: 'ChIJH3w7GaZMHRURkD-WwKJy-8E',
    location: {
      lat: 32.109333,
      lng: 34.855499
    },
    dateFrom: '2018-03-15',
    dateTo: '2018-04-10',
    confession: null
  };

  constructor(private router: Router, private httpService: HttpService) {
  }

  ngOnInit() {
    localStorage.setItem('token', 'asdfasdfasdf');
    // localStorage.removeItem('token');
    // this.getEventListCards();
    console.log('asdfasdf');
    this.loadEventList();
  }

  goToEvent() {
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['event']);
    }
  }

  getEventListCards() {
    this.httpService.getListOfEventsInProgress(0, 2, this.postData)
      .subscribe((object: Object) => {
        console.log(object);
      });
  }

  loadEventList() {
    this.httpService.getContent()
      .subscribe(cards => {
        console.log(cards);
      });
  }
}
