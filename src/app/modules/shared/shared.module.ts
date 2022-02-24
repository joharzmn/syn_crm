import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridSystemComponent } from './grid-system/grid-system.component';
import { AppModule } from '../app/app.module';



@NgModule({
  declarations: [
    GridSystemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
