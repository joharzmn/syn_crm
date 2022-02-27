import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridSystemComponent } from './grid-system/grid-system.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    GridSystemComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
  ],
  exports: [GridSystemComponent,GridComponent]
})
export class SharedModule { }
