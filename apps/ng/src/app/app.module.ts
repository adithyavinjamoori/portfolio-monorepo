import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AngularLibModule} from "../../../../libs/angular-lib/src/lib/angular-lib.module"
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,AngularLibModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
