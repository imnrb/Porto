import React from 'react'
import Faq from './Faq'
import Heey from './Heey'


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