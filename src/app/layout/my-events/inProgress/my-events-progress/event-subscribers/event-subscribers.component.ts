import {Component, Input, OnInit} from '@angular/core';
import {ServerService} from '../../../../../shared/services/server.service';
import {MatDialog} from '@angular/material';
import {LoginComponent} from '../../../../../auth/login/login.component';

@Component({
  selector: 'app-event-subscribers',
  templateUrl: './event-subscribers.component.html',
  styleUrls: ['./event-subscribers.component.scss']
})
export class EventSubscribersComponent implements OnInit {
  /*@Input() subscribers;
  @Input() eventId;*/
  @Input() event;
  isDetailed = false;
  fullName = '';
  confession = '';
  gender = '';
  food = '';
  isMarried = '';
  rate;
  isHigh = {};
  pictureLink = '';

  constructor(private server: ServerService, private dialog: MatDialog) { }

  ngOnInit() {
    this.isHigh = {
      'high' : this.event.participants.length > 3 ? true : false
    };
  }

  showDetails(sub) {
    this.isDetailed = true;
    this.fullName = sub.fullName;
    this.confession = sub.confession;
    this.gender = sub.gender;
    this.food = sub.foodPreferences;
    this.isMarried = sub.maritalStatus;
    this.rate = sub.rate;
    this.pictureLink = sub.pictureLink[0];
  }

  getPicture(sub) {
    return sub.pictureLink[0];
  }

  invite(sub) {
    /*const token = localStorage.getItem('token');
    if (token && token !== '') {
      this.server.inviteToEvent(this.event.eventId, sub.userId, token).subscribe(
        // todo
        // checking userId
        data => sub.isInvited = data.isInvited
      );
    } else {
      this.dialog.open(LoginComponent, {
        height: '70vh',
      });
    }*/
    sub.isInvited = true;
  }

  finishInvite() {
    const token = localStorage.getItem('token');
    if (token && token !== '') {
      this.server.changeEventStatus(this.event.eventId, token).subscribe(
      // to do
      //  (data) => this.event.status = data.status
      );
    } else {
      this.dialog.open(LoginComponent, {
        height: '70vh',
      });
    }
  }
  closeDetailes() {
    this.isDetailed = false;
  }
}
