import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup/signup.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupConfirmComponent } from './signup-confirm/signup-confirm.component';
import { NoSignupConfirmComponent } from './no-signup-confirm/no-signup-confirm.component';


@NgModule({
  declarations: [
    SignupComponent,
    SignupFormComponent,
    SignupConfirmComponent,
    NoSignupConfirmComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SignupModule { }
