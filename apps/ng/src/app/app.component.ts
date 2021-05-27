import { Component } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Skills from "../../../../libs/react-lib/src/lib/skills/skills";
import { infoJson } from '../../../../libs/assets/src/lib/info.json';
@Component({
  selector: 'resume-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng';
  info:any = infoJson;
  show:boolean = false;
  constructor() {
    this.info.books = this.info.books.map( (i:any) =>{
      i = i.replace(/\s/g, '_')
      return {
        book:i,
        path:`../assets/images/books/${i}.jpeg`
      }
    })
   }

  ngOnInit() {
    this.renderReactComponent();
  }
  renderReactComponent() {
    ReactDOM.render(React.createElement(Skills,this.info), document.getElementById("skills"));
  }

  toggleDialog(){
    this.show = !this.show;
  }
}
