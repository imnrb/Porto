import React from 'react'
import{Routes ,Route} from 'react-router-dom'

import Home from './components/Home';
import Skills from './components/Skills';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />

      </Routes>


    </>
  );
}

export default App;
