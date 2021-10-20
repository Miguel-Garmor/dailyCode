import React from 'react';
import Display from './Display'


const Nav = ({ setTheme, theme, isMobile, setFilterActive, filterActive, setSearchQuery, searchQuery, setSearchLocation, searchLocation, setIsFullTime, isFullTime, setFilteredJobs, filteredJobs, jobs }) => {

    //Functions

    const themeToggleHandler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }

    return (
        <nav>
            <div id="header-container">

                <div id="logo" ><p>devJobs</p></div>
                <div id="theme">
                    <i className="fas fa-sun fa-lg"></i>
                    <div id="theme-switch" onClick={themeToggleHandler}>
                        <div ></div>
                    </div>
                    <i className="fas fa-moon fa-lg"></i>
                </div>
            </div>
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
        </nav>

    );
}

export default Nav;