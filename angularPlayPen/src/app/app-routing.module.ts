import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { MainConceptComponent } from './main/main-concept/main-concept.component';
import { MainComponent } from './main/main.component';
import { PitComponent } from './pit/pit.component';
import { ComponentConceptComponent } from './sub/component-concept/component-concept.component';
import { InputComponent } from './topic/input/input.component';
import { LifecycleComponent } from './topic/lifecycle/lifecycle.component';
import { PipesComponent } from './topic/pipes/pipes.component';

const routes: Route[] = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: MainComponent, children: [
    {path: 'mainConcept', component: MainConceptComponent, children: [
      {path: 'component', component: ComponentConceptComponent, children: [
        {path: 'input', component: InputComponent},
        {path: 'pipes', component: PipesComponent},
        {path: 'lifecycle', component: LifecycleComponent},
        {path: '*****', component: ErrorComponent}
      ]},
      {path: '****', component: ErrorComponent}
    ]},
    {path: '***', component: ErrorComponent}
  ]},
  {path: 'pit', component: PitComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
