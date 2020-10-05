import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentConceptComponent } from './component-concept/component-concept.component';
import { SubComponent } from './sub.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [SubComponent, ComponentConceptComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ComponentConceptComponent
  ]
})
export class SubModule { }
