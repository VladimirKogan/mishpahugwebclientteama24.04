/*root routs of all application*/
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
/*
  {path: '', redirectTo: 'login', pathMatch: 'full'}
*/
  {path: '', loadChildren: './layout/layout.module#LayoutModule'},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
