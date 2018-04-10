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

  toLogin() {
    this.dialog.open(LoginComponent, {
      /*minHeight: '70vh',
      closeOnNavigation: true,
      disableClose: false,
      autoFocus: true,
      panelClass: ['col-12', 'col-sm-12', 'col-md-5', 'col-lg-3']*/
    });
  }

  toRegistrate() {
    this.dialog.open(RegistrationComponent, {
     /* minHeight: '75vh',
      closeOnNavigation: true,
      disableClose: false,
      autoFocus: true,
      panelClass: ['col-12', 'col-sm-12', 'col-md-5', 'col-lg-3']*/
    });
  }
}
