import { Component, OnInit, Input } from '@angular/core';
import { any } from 'prop-types';
@Component({
  selector: 'resume-ng-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() info:any; 
  constructor() { }

  ngOnInit(): void {
  }

}
