import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAComponent } from '../layouts/layout-a/layout-a.component';
import { LayoutBComponent } from '../layouts/layout-b/layout-b.component';
import { LoginComponent } from '../login/login/login.component';
import { ResetPasswordComponent } from '../reset-password/reset-password/reset-password.component';
import { SignupComponent } from '../signup/signup/signup.component';
const routes: Routes = [

  // Layout A - Main Routes
  {
    path: '',
    component: LayoutAComponent,
    data: { animation: 'LayoutAComponent' },
    children: [
      {
        path: 'dashboard',
        data: { animation: 'dashboard' },
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'jobs',
        data: { animation: 'jobs' },
        loadChildren: () => import('../jobs/jobs.module').then(m => m.JobsModule)
      }
    ]
  },

  //Layout B - Authentication Routes
  {
    path: '',
    component: LayoutBComponent,
    data: { animation: 'LayoutBComponent' },
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: { animation: 'login' },
        loadChildren: () => import('../login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'signup',
        data: { animation: 'signup' },
        component: SignupComponent,
        loadChildren: () => import('../signup/signup.module').then(m => m.SignupModule)
      },
      {
        path: 'reset',
        data: { animation: 'reset' },
        component: ResetPasswordComponent,
        loadChildren: () => import('../reset-password/reset-password.module').then(m => m.ResetPasswordModule)
      },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
