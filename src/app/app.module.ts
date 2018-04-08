import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {MaterialModule} from './shared/modules/material/material.module';
import {AuthModule} from './auth/auth.module';
import {LayoutModule} from './layout/layout.module';
import {AppRoutingModule} from './app-routing.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AuthModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule // for send messages to serve !!!!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
