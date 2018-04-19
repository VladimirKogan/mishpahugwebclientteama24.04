import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {WellcomePageComponent} from './wellcome-page/wellcome-page.component';
import {MyEventsComponent} from './my-events/my-events.component';


const routes: Routes = [
  {path: '', component: LayoutComponent,
  children: [
    {path: 'wellcome', component: WellcomePageComponent},
    {path: '', redirectTo: 'wellcome', pathMatch: 'full'},
    {path: 'my-events', component: MyEventsComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LayoutRoutingModule {}
