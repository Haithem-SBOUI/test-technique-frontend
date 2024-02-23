import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from "./component/navbar/navbar.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {Eb1Component} from "./component/eb1/eb1.component";
import {Eb2FormComponent} from "./component/eb2-form/eb2-form.component";
import {Eb2TableComponent} from "./component/eb2-table/eb2-table.component";
import {Eb3FormComponent} from "./component/eb3-form/eb3-form.component";
import {Eb3ChartComponent} from "./component/eb3-chart/eb3-chart.component";

const routes: Routes = [
  {path:'' , component:NavbarComponent , children:[
      { path: 'dashboard', component: DashboardComponent },
      { path: 'eb1', component: Eb1Component },
      { path: 'eb2-form', component: Eb2FormComponent },
      { path: 'eb2-table/:uai/:choix', component: Eb2TableComponent },
      { path: 'eb3-form', component: Eb3FormComponent },
      { path: 'eb3-chart/:uai/:year', component: Eb3ChartComponent },
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
