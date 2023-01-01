import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import {AuthGuard} from "../guards/auth.guard";

const routes : Routes = [
  { path : 'user/home' , component : HomeComponent,
  canActivate:[AuthGuard],
    data:{roles:['User']}
  }
];

@NgModule ( {
  imports : [ RouterModule.forChild ( routes ) ] ,
  exports : [ RouterModule ]
} )
export class UserRoutingModule {
}
