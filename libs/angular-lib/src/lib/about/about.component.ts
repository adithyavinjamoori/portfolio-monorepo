import { Component, OnInit } from '@angular/core';
import {infoJson} from "../../../../assets/src/lib/info.json";
@Component({
  selector: 'resume-ng-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public info:any = infoJson;
  constructor() { }

  ngOnInit(): void {
  }

}
