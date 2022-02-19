import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

const routes: Routes = [
  {
    path: '',
    component: ResetPasswordComponent,
    children: [
      {
        path: 'reset',
        component: ResetPasswordComponent
      },
    ]
  },
  {
    path: 'update-password',
    children: [
      {
        path: '',
        component: UpdatePasswordComponent
      },
      {
        path: ':token',
        component: UpdatePasswordComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetPasswordRoutingModule { }
