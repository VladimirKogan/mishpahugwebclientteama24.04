import {Component, Input, OnInit} from '@angular/core';
import {LoginComponent} from '../../../../../auth/login/login.component';
import {ServerService} from '../../../../../shared/services/server.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-eveent-participants',
  templateUrl: './eveent-participants.component.html',
  styleUrls: ['./eveent-participants.component.scss']
})
export class EveentParticipantsComponent implements OnInit {

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
  phone = '';

  constructor(private server: ServerService, private dialog: MatDialog) { }

  ngOnInit() {
    this.isHigh = {
      'high' : this.event.participants.length > 4 ? true : false
    };
  }

  showDetails(sub) {
    // checking token???
    this.isDetailed = true;
    this.fullName = sub.fullName;
    this.confession = sub.confession;
    this.gender = sub.gender;
    this.food = sub.foodPreferences;
    this.isMarried = sub.maritalStatus;
    this.rate = sub.rate;
    this.pictureLink = sub.pictureLink[0];
    this.phone = sub.phoneNumber;
  }

  getPicture(sub) {
    return sub.pictureLink[0];
  }

  closeDetailes() {
    this.isDetailed = false;
  }
}
