/*root routes of all application*/
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';
import {FillProfileComponent} from './fill-profile/fill-profile.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
    {path: 'auth', component: AuthComponent},
    {path: 'fill-profile', component: FillProfileComponent},
    {path: 'login', component: LoginComponent}
    ];
  // {path: 'registration', component: FillProfileComponent}
    /*children: [
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent}]}*/

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
