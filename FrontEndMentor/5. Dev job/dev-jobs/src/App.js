import './App.css';
import React, { useState, useEffect } from 'react';

import Nav from './components/Nav';

function App() {
  //State

  const [isMobile, setIsMobile] = useState(false);

  //Effect

  useEffect(() => {
    isMobileHandler();
  }, []);

  //Functions

  const isMobileHandler = () => {
    if (window.innerWidth <= 700) {
      console.log("isMobile");
      setIsMobile(true);
    } else {
      console.log("Ain't mobile");
      setIsMobile(false);
    }
  }

  //Event listeners
  window.addEventListener("resize", isMobileHandler);

  return (
    <div className="App">
      <Nav
        isMobile={isMobile}
      />
    </div>
  );
}

export default App;
