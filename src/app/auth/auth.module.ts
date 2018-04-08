import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import {MaterialModule} from '../shared/modules/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RequestsService} from './fill-profile/requests.service';
import { FillProfileComponent } from './fill-profile/fill-profile.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthComponent,
    FillProfileComponent],

  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RequestsService]
})

export class AuthModule {
}
