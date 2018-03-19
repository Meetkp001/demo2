import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { PageComponent } from './page/page.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';


@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    PageComponent,
    TwowaybindingComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [LifecycleComponent]
})
export class AppModule { }
