import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { ExponentPipe } from './pipes/exponent.pipe';
import { AddPipe } from './pipes/add.pipe';
import { JsonPipePipe } from './pipes/json-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DummyComponent } from './dummy/dummy.component';
import { LifecycleDirective } from './lifecycle.directive';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ChildOneComponent } from './component-interaction/child-one/child-one.component';
import { ComponentStyleComponent } from './component-style/component-style.component';



@NgModule({
  declarations: [InputComponent, PipesComponent, ExponentPipe, AddPipe, JsonPipePipe, LifecycleComponent, DummyComponent, LifecycleDirective, ComponentInteractionComponent, ChildOneComponent, ComponentStyleComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    InputComponent
  ]
})
export class TopicModule { }
