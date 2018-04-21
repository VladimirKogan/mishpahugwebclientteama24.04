import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ServerService} from '../../shared/services/server.service';
import {RegistrationComponent} from '../registration/registration.component';
import {MatDialog} from '@angular/material';
import {DataService} from '../../shared/services/data.service';

@Component({
  selector: 'app-fill-profile',
  templateUrl: './fill-profile.component.html',
  styleUrls: ['./fill-profile.component.scss']
})
export class FillProfileComponent implements OnInit {


  registerForm: FormGroup;
  staticFields = {
    'confession': [], // select
    'gender': [], // select
    'maritalStatus': [], // select
    'foodPreferences': [], // select
    'languages': [] // select
  };
  hasError = false;
  errorField = '';
  picture = '';

  constructor(private server: ServerService, private data: DataService, private router: Router, private dialog: MatDialog) {
  }

  ngOnInit() {
    // getting of static fields from db.json;
    this.server.getStaticFields().subscribe(
      (response) => {
        this.staticFields.confession = response['confession'];
        this.staticFields.gender = response['gender'];
        this.staticFields.maritalStatus = response['maritalStatus'];
        this.staticFields.foodPreferences = response['foodPreferences'];
        this.staticFields.languages = response['languages'];
      },
      (e) => {
        this.hasError = true;
        this.errorField = e.error.error.message;
        console.log(e.error.error.message);
      });
    // getting of static fields from server;
    /*this.staticFields.confession = this.data['confession'];
    this.staticFields.gender = this.data['gender'];
    this.staticFields.maritalStatus = this.data['maritalStatus'];
    this.staticFields.foodPreferences = this.data['foodPreferences'];
    this.staticFields.languages = this.data['languages'];*/


    this.registerForm = new FormGroup({
      'firstName': new FormControl('', [Validators.required, this.checkNumbers.bind(this)]),
      'lastName': new FormControl('', [Validators.required, this.checkNumbers.bind(this)]),
      'dateOfBirth': new FormControl('', [Validators.required]), // format yyyy-mm-dd
      'confession': new FormControl('', [Validators.required]), // select
      'gender': new FormControl('', [Validators.required]), // select
      'pictureLink': new FormControl(['../../../assets/images/avatar-male.png']), // [Validators.required]
      'phoneNumber': new FormControl('', [Validators.required]),
      'maritalStatus': new FormControl('', [Validators.required]), // select
      'foodPreferences': new FormControl('', [Validators.required]), // select
      'languages': new FormControl('', [Validators.required]), // select
      'description': new FormControl('', [Validators.required])
    });

    this.picture = this.data.getPicture();
  }

  checkNumbers(control: FormControl) {
    if (control.value.includes('0')) {
      return {'containsNumber': true};
    } else if (control.value.includes('1')) {
      return {'containsNumber': true};
    } else if (control.value.includes('2')) {
      return {'containsNumber': true};
    } else if (control.value.includes('3')) {
      return {'containsNumber': true};
    } else if (control.value.includes('4')) {
      return {'containsNumber': true};
    } else if (control.value.includes('5')) {
      return {'containsNumber': true};
    } else if (control.value.includes('6')) {
      return {'containsNumber': true};
    } else if (control.value.includes('7')) {
      return {'containsNumber': true};
    } else if (control.value.includes('8')) {
      return {'containsNumber': true};
    } else if (control.value.includes('9')) {
      return {'containsNumber': true};
    } else {
      return null;
    }
  }


  sendUserProfile() {
    const data = this.registerForm.value;
    data.phoneNumber = '' + data.phoneNumber;
    const token = localStorage.getItem('token');
    if (token != null) {
      this.server.regUserProfile(data).subscribe(
        (response) => {
          // console.log('Success:' + response);
          alert('Success');
          // this.router.navigate(['/#']);   // transfer to next page(event or my-profile)
        },
        (error) => {
          console.log('Error: ' + error);
          this.errorField = error;
          if (error.status === 401) {
            this.errorField = 'Wrong authorization!';
          } else if (error.status === 422) {
            this.errorField = 'Invalid data!';
          }
        }
      );
    } else {
      this.toRegistrate();
    }
  }

  toRegistrate() {
    this.dialog.open(RegistrationComponent, {
      minHeight: '75vh',
      closeOnNavigation: true,
      disableClose: false,
      autoFocus: true,
      panelClass: ['col-12', 'col-sm-12', 'col-md-5', 'col-lg-3']
    });
  }

  getErrorMessageName() {
    return this.registerForm.get('firstName').hasError('containsNumber') ? 'Shouldn`t contain number' :
      this.registerForm.get('lastName').hasError('containsNumber') ? 'Shouldn`t contain number' : 'This field is mandatory';
  }
}
