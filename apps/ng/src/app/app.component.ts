import { Component } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Skills from "../../../../libs/react-lib/src/lib/skills/skills";
@Component({
  selector: 'resume-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng';
  constructor() { }

  ngOnInit() {
    this.renderReactComponent();
  }
  renderReactComponent() {
    ReactDOM.render(React.createElement(Skills), document.getElementById("skills"));

  }
}
