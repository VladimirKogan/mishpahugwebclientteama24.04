import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {ServerService} from '../../shared/services/server.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DataService} from '../../shared/services/data.service';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<RegistrationComponent>,
              @Inject(MAT_DIALOG_DATA) data: any,
              private server: ServerService,
              private router: Router,
              private dataServ: DataService,
              private dialog: MatDialog) {
  }

  form: FormGroup;
  passLength = 6;
  hasError = false;
  err = '';
  curPass = '';

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl('',
        [Validators.required, Validators.email]),
      'password': new FormControl('',
        [Validators.required, Validators.minLength(this.passLength)]),
      'passwordRep': new FormControl('',
        [Validators.required, Validators.minLength(this.passLength),
          this.checkPass.bind(this)])
    });
  }

  checkPass(control: FormControl) {
    if (control.value !== this.curPass) {
      return {
        'notEqual': true
      };
    }
    return null;
  }

  getErrorMessagePassRepeat() {
    return this.form.get('passwordRep').hasError('required') ? 'This field is mandatory' :
      this.form.get('passwordRep').hasError('notEqual') ? 'The password is not the same' : '';
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
    this.server.registrate(this.form.value.email, this.form.value.password).subscribe(
      data => {
        console.log(data);
        this.dataServ.saveData(data);
        this.hasError = false;
        // transfer to the needed FillProfile component to continue registration
        this.navigate('/fill-profile');
      },
      error => {
        localStorage.removeItem('token');
        if (error.status === 409) {
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

  openLogin() {
    this.dialogRef.close();
    setTimeout(() => {
      const dialogRef1 = this.dialog.open(LoginComponent, {
        height: '70vh',
        /*closeOnNavigation: true,
        disableClose: false,
        autoFocus: true,
        panelClass: ['col-12', 'col-sm-12', 'col-md-5', 'col-lg-3']*/
      });
    }, 500);

  }

  navigate(link) {
    this.dialogRef.close();
    setTimeout(() => {
      this.router.navigate([link]);
    }, 500);
  }
}
