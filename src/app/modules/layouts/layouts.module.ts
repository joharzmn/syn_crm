import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutAComponent } from './layout-a/layout-a.component';
import { LayoutBComponent } from './layout-b/layout-b.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ToolbarComponent } from './layout-a/toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SideMenuComponent } from './layout-a/side-menu/side-menu.component';
import { LoginComponent } from '../login/login/login.component';
import { LoginModule } from '../login/login.module';
import { UserToolBarComponent } from './layout-a/user-tool-bar/user-tool-bar.component';

@NgModule({
  declarations: [
    LayoutAComponent,
    LayoutBComponent,
    ToolbarComponent,
    SideMenuComponent,
    UserToolBarComponent,

  ],
  imports: [
    CommonModule,
    LoginModule,
    LayoutsRoutingModule,
    RouterModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  exports: [
    RouterModule
  ],

})
export class LayoutsModule { }
