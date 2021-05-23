import React from 'react';

import './skills.module.scss';
import {infoJson} from "../../../../assets/src/lib/info.json"

/* eslint-disable-next-line */
export interface SkillsProps {}

export function Skills(props: SkillsProps) {

  let skillItems =  infoJson.skillset.map((d:any) => <li  className={d} title={d}  key={d}></li>);
  let toolsItems =  infoJson.Tools.map((d:any) => <li  className={d} title={d}  key={d}></li>);
  let cloudItems =  infoJson.Clouds.map((d:any) => <li  className={d} title={d}  key={d}></li>);


  return (
    <div className="skillSet-container">
          <h2 className="title">Skillset</h2>
          <ul className="skills">{skillItems}</ul>
          <ul className="skills">{toolsItems}</ul>
          <ul className="skills">{cloudItems}</ul>
    </div>
  );
}

export default Skills;
