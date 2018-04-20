import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageCropperComponent} from 'ngx-img-cropper';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material';

import {LayoutComponent} from './layout.component';
import {LayoutRoutingModule} from './layout-routing.module';
import {WellcomePageComponent} from './wellcome-page/wellcome-page.component';
import {MaterialModule} from '../shared/modules/material/material.module';
import {HeaderComponent} from '../shared/components/header/header.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { MyEventsPendingComponent } from './my-events/pending/my-events-pending/my-events-pending.component';
import { MyEventsProgressComponent } from './my-events/inProgress/my-events-progress/my-events-progress.component';
import { MyEventsDoneComponent } from './my-events/done/my-events-done/my-events-done.component';
import { EventComponent } from './my-events/inProgress/my-events-progress/event/event.component';
import { EventSubscribersComponent } from './my-events/inProgress/my-events-progress/event-subscribers/event-subscribers.component';
import { PendingEventComponent } from './my-events/pending/my-events-pending/pending-event/pending-event.component';
import { EveentParticipantsComponent } from './my-events/pending/my-events-pending/eveent-participants/eveent-participants.component';
import { EventDoneComponent } from './my-events/done/my-events-done/event-done/event-done.component';
import {MenuComponent} from '../shared/components/menu/menu.component';
import {EventListPageComponent} from './event-list-page/event-list-page.component';
import {FillProfileComponent} from '../auth/fill-profile/fill-profile.component';
import { ChangePictureComponent } from './change-picture/change-picture.component';
import {ImgcropComponent} from '../shared/components/imgcrop/imgcrop.component';
import {EventInfoComponent} from './event-info/event-info.component';
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
    WellcomePageComponent,
    MyEventsComponent,
    MyEventsPendingComponent,
    MyEventsProgressComponent,
    MyEventsDoneComponent,
    EventComponent,
    EventSubscribersComponent,
    PendingEventComponent,
    EveentParticipantsComponent,
    EventDoneComponent,
    MenuComponent,
    EventListPageComponent,
    FillProfileComponent,
    ChangePictureComponent,
    ImgcropComponent,
    ImageCropperComponent,
    EventInfoComponent
  ],
  entryComponents: [EventInfoComponent]
})

export class LayoutModule {
}
