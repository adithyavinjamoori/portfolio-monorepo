import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AngularLibModule} from "../../../../libs/angular-lib/src/lib/angular-lib.module"
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,AngularLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
