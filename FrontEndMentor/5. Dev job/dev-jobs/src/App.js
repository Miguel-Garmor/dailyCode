import './App.css';
import React, { useState, useEffect } from 'react';

import Nav from './components/Nav';

function App() {
  //State

  const [isMobile, setIsMobile] = useState(false);
  const [filterActive, setFilterActive] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [isFullTime, setIsFullTime] = useState(false);

  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  //Effect

  useEffect(() => {
    isMobileHandler();
    fetchJobs();
  }, []);

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);




  //Functions

  const fetchJobs = () => {
    fetch("http://localhost:8000/jobs")
      .then(result => {
        return result.json();
      })
      .then(data => {
        setJobs(data);
      });
  }

  const isMobileHandler = () => {
    if (window.innerWidth <= 700) {
      setIsMobile(true);
    } else {
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
      {filteredJobs && <Nav
        isMobile={isMobile}

        setFilterActive={setFilterActive}
        filterActive={filterActive}

        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}

        setSearchLocation={setSearchLocation}
        searchLocation={searchLocation}

        setIsFullTime={setIsFullTime}
        isFullTime={isFullTime}

        jobs={jobs}

        setFilteredJobs={setFilteredJobs}
        filteredJobs={filteredJobs}

      />}
    </div>
  );
}

export default App;
