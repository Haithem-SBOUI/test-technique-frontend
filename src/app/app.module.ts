import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {Eb1Component} from './component/eb1/eb1.component';
import {HttpClientModule} from "@angular/common/http";
import {Eb2FormComponent} from './component/eb2-form/eb2-form.component';
import {Eb2TableComponent} from './component/eb2-table/eb2-table.component';
import {ReactiveFormsModule} from "@angular/forms";
import {Eb3FormComponent} from './component/eb3-form/eb3-form.component';
import {Eb3ChartComponent} from './component/eb3-chart/eb3-chart.component';
import {ChartistModule} from "ng-chartist";
import {ChartModule} from "angular-highcharts";
import { ExportDataComponent } from './component/export-data/export-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    Eb1Component,
    Eb2FormComponent,
    Eb2TableComponent,
    Eb3FormComponent,
    Eb3ChartComponent,
    ExportDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
