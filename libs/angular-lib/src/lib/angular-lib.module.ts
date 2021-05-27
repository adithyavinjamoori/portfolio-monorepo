import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgHeaderComponent } from './ng-header/ng-header.component';
import { NgHomeComponent } from './ng-home/ng-home.component';
import { AboutComponent } from './about/about.component';
import {TimelineComponent} from "./about/timeline/timeline.component";
import { AboutProjectComponent } from './about-project/about-project.component';
import { TooltipDirective } from './tooltip.directive';
import { DialogComponent } from './dialog/dialog.component'

@NgModule({
  imports: [CommonModule],
  declarations: [
    NgHeaderComponent,
    NgHomeComponent,
    AboutComponent,
    TimelineComponent,
    AboutProjectComponent,
    TooltipDirective,
    DialogComponent
  ],
  exports: [
    NgHeaderComponent,
    NgHomeComponent,
    AboutComponent,
    AboutProjectComponent,
    TooltipDirective,
    DialogComponent
  ],
})
export class AngularLibModule {}
