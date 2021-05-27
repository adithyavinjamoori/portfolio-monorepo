import { Component, OnInit, Input } from '@angular/core';
import {infoJson} from "../../../../assets/src/lib/info.json"

@Component({
  selector: 'resume-ng-home',
  templateUrl: './ng-home.component.html', 
  styleUrls: ['./ng-home.component.scss']
})
export class NgHomeComponent implements OnInit {
  @Input() info:any
  public skillsShort:string = "";
  public companies:string = "";
  constructor() {
   }

  ngOnInit(): void {
    this.companies = this.info.companies.join(" | ")
    this.skillsShort = this.info.skillsShort.join(" | ")
  }

}
