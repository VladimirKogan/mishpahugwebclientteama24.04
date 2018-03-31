import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor()/*(private router: Router)*/ { }

  ngOnInit() {
    /*this.router.navigate(['/login'])*/
  }

}
