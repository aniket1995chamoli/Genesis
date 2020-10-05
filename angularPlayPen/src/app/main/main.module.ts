import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainConceptComponent } from './main-concept/main-concept.component';
import { MainComponent } from './main.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [MainConceptComponent, MainComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    MainConceptComponent
  ]
})
export class MainModule { }
