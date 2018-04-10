import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    localStorage.removeItem('token');
    this.navigate('/wellcome');
  }

  navigate (link) {
    setTimeout (() => {
      this.router.navigate([link]);
    }, 500);
  }
}
