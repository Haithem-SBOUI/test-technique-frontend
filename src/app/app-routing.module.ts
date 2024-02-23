import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from "./component/navbar/navbar.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {Eb1Component} from "./component/eb1/eb1.component";

const routes: Routes = [
  {path:'' , component:NavbarComponent , children:[
      { path: 'dashboard', component: DashboardComponent },
      { path: 'eb1', component: Eb1Component },
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
