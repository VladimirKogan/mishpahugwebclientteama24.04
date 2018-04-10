import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventListCardModel} from '../../shared/models/evnt-list-card.model';
import {ServerService} from '../../shared/services/server.service';
import {LoginComponent} from '../../auth/login/login.component';
import {MatDialog} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-event-list-page',
  templateUrl: './event-list-page.component.html',
  styleUrls: ['./event-list-page.component.scss']
})
export class EventListPageComponent implements OnInit {
  eventCards: EventListCardModel[] = [];

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

  constructor(private router: Router, private serverService: ServerService, private dialog: MatDialog) {
  }

  ngOnInit() {
    localStorage.setItem('token', 'asdfasdfasdf');
    localStorage.removeItem('token');
    // this.getEventListCards();
    this.loadEventList();

  }

  goToEvent() {
    if (localStorage.getItem('token') === null) {
      this.toLogin();
    } else {
      this.router.navigate(['event']);
    }
  }

  getEventListCards() {
    this.serverService.getListOfEventsInProgress(0, 2, this.postData)
      .subscribe((object: Object) => {
        console.log(object);
      });
  }

  loadEventList() {
    this.serverService.getContent()
      .subscribe(data => {
        this.eventCards = data;
      });

  }

  toLogin() {
    this.dialog.open(LoginComponent, {
      minHeight: '70vh',
      closeOnNavigation: true,
      disableClose: false,
      autoFocus: true,
      panelClass: ['col-12', 'col-sm-12', 'col-md-5', 'col-lg-3']
    });
  }
}
