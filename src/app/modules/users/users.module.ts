import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { SharedModule } from '../../modules/shared/shared.module';


@NgModule({
  declarations: [
    UsersComponent,

  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule

  ],
  exports: [
  ]
})
export class UsersModule { }
