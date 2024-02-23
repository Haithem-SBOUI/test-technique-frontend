import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {Eb1Component} from './component/eb1/eb1.component';
import {HttpClientModule} from "@angular/common/http";
import {Eb2FormComponent} from './component/eb2-form/eb2-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    Eb1Component,
    Eb2FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
