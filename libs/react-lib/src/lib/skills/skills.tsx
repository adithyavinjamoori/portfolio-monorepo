import React from 'react';

import './skills.module.scss';

/* eslint-disable-next-line */
export interface SkillsProps {
  skillset:Array<string>,
  Tools:Array<string>,
  Clouds:Array<string>
}

export function Skills(props: SkillsProps) {

  let skillItems =  props.skillset.map((d:any) => <li  className={d} title={d}  key={d}></li>);
  let toolsItems =  props.Tools.map((d:any) => <li  className={d} title={d}  key={d}></li>);
  let cloudItems =  props.Clouds.map((d:any) => <li  className={d} title={d}  key={d}></li>);


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
