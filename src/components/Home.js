import React from 'react'
import Faq from './Skills'
import Heey from './Projects'


import './HomeStyles.css'
import Intro from './Intro'
import Navbar from './Navbar'
const Home = () => {
  return (
    <div>
       <Navbar>
    
       </Navbar>
        <Intro></Intro>
        <Faq/>
       <Heey/>
    </div>
  )
}

export default Home