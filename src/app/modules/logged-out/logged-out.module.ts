import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedOutRoutingModule } from './logged-out-routing.module';
import { LoggedOutComponent } from './logged-out/logged-out.component';


@NgModule({
  declarations: [
    LoggedOutComponent
  ],
  imports: [
    CommonModule,
    LoggedOutRoutingModule
  ]
})
export class LoggedOutModule { }
