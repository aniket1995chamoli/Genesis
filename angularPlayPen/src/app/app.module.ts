import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicModule } from './topic/topic.module';
import { MainModule } from './main/main.module';
import { SubModule } from './sub/sub.module';
import { ErrorComponent } from './error/error.component';
import { PitModule } from './pit/pit.module';
import { ComponentStylesComponent } from './app/topic/component-styles/component-styles.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    ComponentStylesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopicModule,
    MainModule,
    SubModule,
    PitModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
