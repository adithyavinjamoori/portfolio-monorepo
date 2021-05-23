import { Component, OnInit } from '@angular/core';
import {infoJson} from "../../../../../assets/src/lib/info.json";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  public titleLine:Array<any> = infoJson.timeLine;
  constructor() { }

  ngOnInit(): void {
  }

}
