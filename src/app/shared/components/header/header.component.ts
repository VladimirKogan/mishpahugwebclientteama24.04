import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginComponent} from '../../../auth/login/login.component';
import {RegistrationComponent} from '../../../auth/registration/registration.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  showMenu() {
    if (localStorage.length !== 0) {
      return true;
    } else {
      return false;
    }
  }
  toLogin() {
    this.dialog.open(LoginComponent, {
      height: '70vh',
    });
  }

  toRegistrate() {
    this.dialog.open(RegistrationComponent, {
      height: '75vh',
    });
  }
}
