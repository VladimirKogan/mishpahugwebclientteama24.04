import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {LayoutRoutingModule} from './layout-routing.module';
import {WellcomePageComponent} from './wellcome-page/wellcome-page.component';
import {MaterialModule} from '../shared/modules/material/material.module';
import {HeaderComponent} from '../shared/components/header/header.component';
import {MenuComponent} from '../shared/components/menu/menu.component';
import {EventListPageComponent} from './event-list-page/event-list-page.component';
import {FillProfileComponent} from '../auth/fill-profile/fill-profile.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EventInfoComponent} from './event-info/event-info.component';
import {MatDialogModule} from '@angular/material';
import {BarRatingModule} from 'ngx-bar-rating';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    MatDialogModule,
    ReactiveFormsModule,
    BarRatingModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    WellcomePageComponent,
    EventListPageComponent,
    FillProfileComponent,
    EventInfoComponent
  ],
  entryComponents: [EventInfoComponent]
})

export class LayoutModule {
}
