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
            JavaScript
            <div class="container">
              <div class="skills Javascript"></div>
            </div>
          </li>

          <li>
            React
            <div class="container">
              <div class="skills react"></div>
            </div>
          </li>
          <li>
            Python
            <div class="container">
              <div class="skills python"></div>
            </div>
          </li>

         
          <li>
            OOPs
            <div class="container">
              <div class="skills OOPs"></div>
            </div>
          </li>
          <li>
            DSA
            <div class="container">
              <div class="skills DSA"></div>
            </div>
          </li>
          <li>
            DBMS
            <div class="container">
              <div class="skills DBMS"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Skills