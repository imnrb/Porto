import React from 'react'
import './ProjectsStyles.css'

const Projects = () => {
  return (
    <div id='projects'>

      <div className='projects-head'>
        <h1>Projects</h1>
      </div>
      <div id="project-card">
        <ul>
          <div className='project-div' >
            <li>Real-Time Chat Application Using Socket IO</li>
            <a href="https://github.com/imnrb/Chit-Chat" target={"_blank"}><li>Project Link</li></a>
          </div>
          <div className='project-div'>
            <li>Live Weather App using Nodejs</li>
            <a href="https://github.com/imnrb/Chit-Chat" target={"_blank"}><li>Project Link</li></a>
          </div>          
          <div className='project-div'>
            <li>Smart Irrigation System Using STM32 microcontroller</li>
            <a href="https://github.com/imnrb/Smart-Irrigation" target={"_blank"}><li>Project Link</li></a>
          </div>          
          <div className='project-div'>
            <li></li>
            <li></li>
          </div>
        </ul>
      </div>

    </div>
  )
}

export default Projects