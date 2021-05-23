import { Component, OnInit } from '@angular/core';
import {infoJson} from "../../../../assets/src/lib/info.json"

@Component({
  selector: 'resume-ng-home',
  templateUrl: './ng-home.component.html', 
  styleUrls: ['./ng-home.component.scss']
})
export class NgHomeComponent implements OnInit {

  public info:any = infoJson;
  public skillsShort:string;
  public companies:string;
  constructor() {

  this.companies = infoJson.companies.join(" | ")
  this.skillsShort = infoJson.skillsShort.join(" | ")
   }

  ngOnInit(): void {
  }

}
