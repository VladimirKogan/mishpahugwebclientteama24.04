import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageCropperComponent} from 'ngx-img-cropper';
import {ReactiveFormsModule} from '@angular/forms';

import {LayoutComponent} from './layout.component';
import {LayoutRoutingModule} from './layout-routing.module';
import { WellcomePageComponent } from './wellcome-page/wellcome-page.component';
import {MaterialModule} from '../shared/modules/material/material.module';
import {HeaderComponent} from '../shared/components/header/header.component';
import {MenuComponent} from '../shared/components/menu/menu.component';
import {EventListPageComponent} from './event-list-page/event-list-page.component';
import {FillProfileComponent} from '../auth/fill-profile/fill-profile.component';
import { ChangePictureComponent } from './change-picture/change-picture.component';
import {ImgcropComponent} from '../shared/components/imgcrop/imgcrop.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    WellcomePageComponent,
    EventListPageComponent,
    FillProfileComponent,
    ChangePictureComponent,
    ImgcropComponent,
    ImageCropperComponent
  ]
})

export class LayoutModule {}
