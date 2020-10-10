import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PitComponent } from './pit.component';
import { PitChildComponent } from './pit-child/pit-child.component';
import { PitParentComponent } from './pit-parent/pit-parent.component';



@NgModule({
  declarations: [PitComponent, PitChildComponent, PitParentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PitChildComponent,
    PitComponent
  ]
})
export class PitModule { }
