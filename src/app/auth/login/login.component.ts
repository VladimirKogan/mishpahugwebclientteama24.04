import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ServerService} from '../../shared/services/server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit() {
    setTimeout(() => {
      const dialogRef = this.dialog.open(DialogLoginComponent, {
        height: '70vh',
        disableClose: true,
        panelClass: ['col-12', 'col-sm-12', 'col-md-6', 'col-lg-3']
      });
    });
  }
}

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialogLogin.html',
  styleUrls: ['./dialogLogin.scss']
})
export class DialogLoginComponent implements OnInit {
  constructor( public dialogRef: MatDialogRef<DialogLoginComponent>,
               @Inject(MAT_DIALOG_DATA) data: any,
               private server: ServerService,
               private router: Router) {}
  form: FormGroup;
  passLength = 6;
  hasError = false;
  err = '';

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl('',
        [Validators.required, Validators.email]),
      'password': new FormControl('',
        [Validators.required, Validators.minLength(this.passLength)])
    });
  }

  getErrorMessageEmail() {
    return this.form.get('email').hasError('required') ? 'This field is mandatory' :
      this.form.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePass() {
    return this.form.get('password').hasError('required') ? 'This field is mandatory' :
      this.form.get('password').hasError('minlength') ? 'Enter ' + this.passLength + ' characters' : '';
  }

  onSubmit() {
    this.server.login(this.form.value.email, this.form.value.password).subscribe(
      data => {
        console.log(data);
        this.hasError = false;
        // link to needed page
        this.navigate('/wellcome');
      },
      error => {
        localStorage.removeItem('token');
        if (error.status === 401) {
          console.log(error);
          this.hasError = true;
          this.err = error.error.error.message;
        } else if (error.status === 429) {
          console.log(error);
          this.hasError = true;
          this.err = error.statusText;
        } else {
          console.log(error);
          // this.err = error.message;
          this.err = 'Server not found';
        }
      }
    );
  }

  navigate (link) {
    this.dialogRef.close();
    setTimeout (() => {
      this.router.navigate([link]);
    }, 500);
  }
}
