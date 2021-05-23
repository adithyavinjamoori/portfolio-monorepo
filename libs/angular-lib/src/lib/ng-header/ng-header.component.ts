import { Component, OnInit } from '@angular/core';
import {infoJson} from "../../../../assets/src/lib/info.json"

@Component({
  selector: 'resume-ng-header',
  templateUrl: './ng-header.component.html',
  styleUrls: ['./ng-header.component.scss']
})
export class NgHeaderComponent implements OnInit {
  public title:string = infoJson.pageTopLeftTitle;

  constructor() { }

  ngOnInit(): void {
  }

}


