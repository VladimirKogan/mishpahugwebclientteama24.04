import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {/*DialogLoginComponent, */LoginComponent} from './login/login.component';
import {/*DialogRegistrComponent, */RegistrationComponent} from './registration/registration.component';
import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import {MaterialModule} from '../shared/modules/material/material.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthComponent],

  entryComponents: [LoginComponent, RegistrationComponent],

  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ReactiveFormsModule
  ]

})

export class AuthModule {
}
