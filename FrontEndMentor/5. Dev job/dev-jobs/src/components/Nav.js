import React from 'react';
import Display from './Display'
import JobDescription from './JobDescription';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Nav = ({ setTheme, theme, isMobile, setFilterActive, filterActive, setSearchQuery, searchQuery, setSearchLocation, searchLocation, setIsFullTime, isFullTime, setFilteredJobs, filteredJobs, jobs }) => {



    //Functions

    const themeToggleHandler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }


    return (
        <Router>
            <nav>
                <div id="header-container">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <div id="logo" ><p>devJobs</p></div>
                    </Link>
                    <div id="theme">
                        <i className="fas fa-sun fa-lg"></i>
                        <div id="theme-switch" onClick={themeToggleHandler}>
                            <div ></div>
                        </div>
                        <i className="fas fa-moon fa-lg"></i>
                    </div>
                </div>
                <Switch>
                    <Route path="/" exact component={Display} >
                        <Display
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
                        />
                    </Route>
                    <Route path="/description" component={JobDescription}>
                        <JobDescription />
                    </Route>
                </Switch>


            </nav>
        </Router>
    );
}

export default Nav;