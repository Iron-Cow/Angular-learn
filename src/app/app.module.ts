import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SswitchComponent } from './sswitch/sswitch.component';



@NgModule({
  declarations: [
    AppComponent,
    SswitchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
