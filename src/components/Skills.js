import React from 'react'
import './SkillsStyles.css'

const Skills = () => {
  return (
    <div id='skills'>
      <div className='skill-head'>
        <h1 >Skills</h1>
      </div>
      <div className='skill-cards'>
        <ul className='list-skill'>
          <li>
            Java
            <div class="container">
              <div class="skills java"></div>
            </div>
          </li>

          <li>
            C++
            <div class="container">
              <div class="skills c"></div>
            </div>
          </li>

          <li>
            React
            <div class="container">
              <div class="skills react"></div>
            </div>
          </li>

          <li>
            Mongo
            <div class="container">
              <div class="skills mongo"></div>
            </div>
          </li>

          <li>
            Node
            <div class="container">
              <div class="skills node"></div>
            </div>
          </li>
          <li>
            Git
            <div class="container">
              <div class="skills git"></div>
            </div>
          </li>
          <li>
            Python
            <div class="container">
              <div class="skills python"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Skills