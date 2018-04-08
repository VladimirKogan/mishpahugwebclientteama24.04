import {Component, OnInit} from '@angular/core';
import {RequestsService} from './requests.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

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
  error = '';

  /*user = {
    'token': '',
    'staticFields': {
      'confession': ['confession1', 'confession2'], // select
      'gender': ['gender1', 'gender2'], // select
      'martialStatus': ['martialStatus1', 'martialStatus2'], // select
      'foodPreferences': ['foodPreferences1', 'foodPreferences2'], // select
      'languages': ['languages1', 'languages2']
    }
  };*/


  constructor(private server: RequestsService, private router: Router) {
  }

  ngOnInit() {
    this.server.getStaticFields().subscribe(
      (response) => {
        this.staticFields.confession = response['confession'];
        this.staticFields.gender = response['gender'];
        this.staticFields.maritalStatus = response['maritalStatus'];
        this.staticFields.foodPreferences = response['foodPreferences'];
        this.staticFields.languages = response['languages'];
        // console.log(this.staticFields);
      },
      (e) => {
        this.hasError = true;
        this.error = e.error.error.message;
        console.log(e.error.error.message);
      });


    this.registerForm = new FormGroup({
      'firstName': new FormControl('', [Validators.required]),
      'lastName': new FormControl('', [Validators.required]),
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
  }

  sendUserProfile() {
    const data = this.registerForm.value;
    data.phoneNumber = '' + data.phoneNumber;
    this.server.regUserProfile(data).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/#']);   // transfer to next page(event or my-profile)
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(data);

    // localStorage.setItem('TOKEN', JSON.stringify('dGVzdEBtYWlsLmNvbToxMjM0NQ=='));
  }

}
