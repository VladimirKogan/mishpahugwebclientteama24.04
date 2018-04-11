import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {WellcomePageComponent} from './wellcome-page/wellcome-page.component';
import {EventListPageComponent} from './event-list-page/event-list-page.component';
import {ChangePictureComponent} from './change-picture/change-picture.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {path: 'wellcome', component: WellcomePageComponent},
      {path: '', redirectTo: 'wellcome', pathMatch: 'full'},
      {path: 'eventlist', component: EventListPageComponent},
      {path: 'changepicture', component: ChangePictureComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LayoutRoutingModule {
}
