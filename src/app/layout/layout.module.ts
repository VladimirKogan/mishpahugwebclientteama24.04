import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {LayoutRoutingModule} from './layout-routing.module';
import { WellcomePageComponent } from './wellcome-page/wellcome-page.component';
import {MaterialModule} from '../shared/modules/material/material.module';
import {HeaderComponent} from '../shared/components/header/header.component';
import {MenuComponent} from '../shared/components/menu/menu.component';
import {EventListPageComponent} from './event-list-page/event-list-page.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    WellcomePageComponent,
    EventListPageComponent]
})

export class LayoutModule {}
