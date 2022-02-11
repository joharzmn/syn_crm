import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SignupFormComponent } from '../signup/signup-form/signup-form.component';
import { SignupConfirmComponent } from './signup-confirm/signup-confirm.component';

const routes: Routes = [
  {
    path: '',
    component: SignupComponent,
    children: [
      {
        path: 'signupform',
        component: SignupFormComponent,
      },
      {
        path: 'signupconfirm',
        component: SignupConfirmComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
