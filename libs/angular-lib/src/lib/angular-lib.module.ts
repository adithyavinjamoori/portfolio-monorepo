import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgHeaderComponent } from './ng-header/ng-header.component';
import { NgHomeComponent } from './ng-home/ng-home.component';
import { AboutComponent } from './about/about.component';
import {TimelineComponent} from "./about/timeline/timeline.component"

@NgModule({
  imports: [CommonModule],
  declarations: [
    NgHeaderComponent,
    NgHomeComponent,
    AboutComponent,
    TimelineComponent
  ],
  exports: [
    NgHeaderComponent,
    NgHomeComponent,
    AboutComponent
  ],
})
export class AngularLibModule {}
