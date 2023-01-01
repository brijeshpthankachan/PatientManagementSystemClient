import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import {MatGridListModule} from "@angular/material/grid-list";


@NgModule({
  declarations: [
    AdminHomeComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatGridListModule
    ]
})
export class AdminModule { }
