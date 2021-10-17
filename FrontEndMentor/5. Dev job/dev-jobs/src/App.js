import './App.css';
import React, { useState, useEffect } from 'react';

import Nav from './components/Nav';

function App() {
  //State

  const [isMobile, setIsMobile] = useState(false);
  const [filterActive, setFilterActive] = useState(false);

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

  const closeOverlay = (e) => {
    if (e.target.classList.contains("overlay")) {
      setFilterActive(true);
    } else if (!e.target.classList.contains("overlay") && !e.target.classList.contains("fa-filter")) {
      setFilterActive(false)
    }
  }

  //Event listeners
  window.addEventListener("resize", isMobileHandler);
  window.addEventListener("click", closeOverlay);


  return (
    <div className="App">
      <Nav
        isMobile={isMobile}
        setFilterActive={setFilterActive}
        filterActive={filterActive}
      />
    </div>
  );
}

export default App;
