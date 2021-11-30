import './App.css';
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from './themes';

import Nav from './components/Nav';


const StyledApp = styled.div`
`;

function App() {
  //State

  const [isMobile, setIsMobile] = useState(false);
  const [filterActive, setFilterActive] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [isFullTime, setIsFullTime] = useState(false);

  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const [theme, setTheme] = useState("dark");

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
    fetch('https://miguelmoral.com/devjobs/data.json')
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setJobs(data)
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

    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp className="App">
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

          setTheme={setTheme}
          theme={theme}

        />}
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
