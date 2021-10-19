import React, { useEffect } from 'react';



const Search = ({ isMobile, setFilterActive, filterActive, setSearchQuery, searchQuery, setSearchLocation, searchLocation, setIsFullTime, isFullTime, setFilteredJobs, filteredJobs, jobs }) => {

   
    //Functions
    const filterActiveHandler = () => {
        setFilterActive(!filterActive);
    }

    const fullTimeHandler = (e) => {
        setIsFullTime(e.target.checked);

    }

    const searchQueryHandler = (e) => {
        setSearchQuery(e.target.value);
    }

    const searchLocationHandler = (e) => {
        setSearchLocation(e.target.value);
    }

    const filterJobsHandler = () => {
        console.log("Run filter function");
        console.log(searchQuery);

        let filteringJobs = [];
        let countryArray = [];
        let countryCheck = false;


        jobs.map(job => {
            console.log(job.id);
            let positionLowerCase = job.position.toLowerCase();
            if (positionLowerCase.includes(searchQuery) || job.position.includes(searchQuery)) {
                console.log(job.position + " contains: " + searchQuery);
                filteringJobs = [...filteringJobs, job];
            }
        });

        if (isFullTime === true) {
            filteringJobs = filteringJobs.filter(job => job.contract === "Full Time");
        }

        console.log("Search Location: " + searchLocation);


        if (searchLocation !== "") {
            //Get all countries in filtered array
            filteringJobs.map(job => {
                countryArray = [...countryArray, job.location];
            });
            //Check if country search query matches any country in filtered array
            countryArray.map(country => {
                if (country.toLowerCase().includes(searchLocation.toLowerCase())) {
                    countryCheck = true;
                }
            });

            console.log("Country check: " + countryCheck);

            //Filter Jobs by the country serached
            if (countryCheck === true) {
                filteringJobs = filteringJobs.filter(job => job.location.toLowerCase().includes(searchLocation.toLowerCase()));
                console.log("Running location Check...");
            }
        }
        console.log("Last filter");
        console.log(filteringJobs);
        setFilteredJobs(filteringJobs);

    }

    //Effect

    useEffect(() => {

    });

    return (


        <div id="search">
            <div id="text-filter">
                <i className="fas fa-search fa-2x"></i>
                <input type="text" placeholder="Filter by title, companies, expertise... " onChange={searchQueryHandler} />
            </div>
            <div id="location-filter">
                <i className={`fas fa-map-marker-alt fa-2x ${isMobile ? "hidden" : ""}`}></i>
                <input className={`${isMobile ? "hidden" : ""}`} type="text" placeholder="Filter by location..." onChange={searchLocationHandler} />
                <i className={`fas fa-filter fa-2x ${isMobile ? "" : "hidden"}`} onClick={filterActiveHandler}></i>
            </div>
            <div id="submit">
                <div className={`${isMobile ? "hidden" : ""}`}>
                    <label id="checkbox">
                        <input type="checkbox" onClick={fullTimeHandler} checked={isFullTime} readOnly={true}/>
                        <span className="checkmark"></span>
                    </label>
                    <p>Full Time</p>
                </div>
                <button onClick={filterJobsHandler}>
                    <p className={`${isMobile ? "hidden" : ""}`}>Search</p>
                    <i className={`fas fa-search fa-lg ${isMobile ? "" : "hidden"}`}></i>
                </button>
            </div>

            <div id="overlay-filter" className={`overlay ${isMobile ? "" : "hidden"} ${filterActive ? "" : "hidden"}`}>
                <div id="overlay-checkbox-container" className="overlay">
                    <label id="checkbox" className="overlay">
                        <input type="checkbox" className="overlay" onClick={fullTimeHandler} checked={isFullTime} readOnly={true}/>
                        <span className="checkmark overlay"></span>
                    </label>
                    <p className="overlay">Full Time</p>
                </div>
                <div id="location-filter" className="overlay">
                    <i className="fas fa-map-marker-alt fa-2x overlay"></i>
                    <input className="overlay" type="text" placeholder="Filter by location..." onChange={searchLocationHandler} />
                </div>
            </div>
        </div>
    );
}

export default Search;