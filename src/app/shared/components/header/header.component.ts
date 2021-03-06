import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {LoginComponent} from '../../../auth/login/login.component';
import {RegistrationComponent} from '../../../auth/registration/registration.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit() {
  }

  showIcon() {
    if (localStorage.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  goToMainPage() {
    setTimeout(() => {
      this.router.navigate(['/eventlist']);
    }, 500);
  }

  toLogin() {
    this.dialog.open(LoginComponent, {
      height: '70vh'
      /*closeOnNavigation: true,
      disableClose: false,
      autoFocus: true,
      panelClass: ['col-12', 'col-sm-12', 'col-md-5', 'col-lg-3']*/
    });
  }

  toRegistrate() {
    this.dialog.open(RegistrationComponent, {
      height: '75vh'
      /*closeOnNavigation: true,
      disableClose: false,
      autoFocus: true,
      panelClass: ['col-12', 'col-sm-12', 'col-md-5', 'col-lg-3']*/
    });
  }
}
