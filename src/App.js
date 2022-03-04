import React from 'react'
import{Routes ,Route} from 'react-router-dom'
import Faq from './components/Faq';
import Home from './components/Home';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />

      </Routes>


    </>
  );
}

export default App;
