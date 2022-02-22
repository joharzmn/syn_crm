import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedOutComponent } from './logged-out/logged-out.component';

const routes: Routes = [
  {
    path: '',
    component: LoggedOutComponent,
    children: [
      {
        path: '',
        component: LoggedOutComponent
      },
      {
        path: 'lggedout',
        component: LoggedOutComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedOutRoutingModule { }
