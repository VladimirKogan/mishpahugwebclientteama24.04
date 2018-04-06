import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DialogLoginComponent, LoginComponent} from './login/login.component';
import {DialogRegistrComponent, RegistrationComponent} from './registration/registration.component';
import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import {MaterialModule} from '../shared/modules/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthComponent,
    DialogLoginComponent,
    DialogRegistrComponent
  ],

  entryComponents: [DialogLoginComponent, DialogRegistrComponent],

  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})

export class AuthModule {
}
