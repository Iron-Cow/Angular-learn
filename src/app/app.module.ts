import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {AppCounterService} from "./service/app-counter.service";
import {LocalCounterService} from "./service/local-counter.service";
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    // AppCounterService
    // LocalCounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
