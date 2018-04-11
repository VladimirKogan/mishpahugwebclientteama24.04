/*root routes of all application*/
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';
<<<<<<< HEAD
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'auth', component: AuthComponent, children: [
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'registration', component: RegistrationComponent}]}
  ];
  // {path: 'registration', component: FillProfileComponent}
    /*children: [
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent}]}*/

=======
import {FillProfileComponent} from './fill-profile/fill-profile.component';
import {LoginComponent} from './login/login.component';



const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'fill-profile', component: FillProfileComponent},
  {path: 'login', component: LoginComponent}
  /*, children: [{path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent} ]}*/
];
>>>>>>> be13a0eba7c967948a838d0ace76f719bb6f7bce

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
