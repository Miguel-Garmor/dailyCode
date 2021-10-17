import React, { useState } from 'react';



const Search = ({ isMobile, setFilterActive, filterActive }) => {

    //State


    //Functions
    const filterActiveHandler = () => {
        setFilterActive(!filterActive);
    }

    return (
        <div id="search">
            <div id="text-filter">
                <i className="fas fa-search fa-2x"></i>
                <input type="text" placeholder="Filter by title, companies, expertise... " />
            </div>
            <div id="location-filter">
                <i className={`fas fa-map-marker-alt fa-2x ${isMobile ? "hidden" : ""}`}></i>
                <input className={`${isMobile ? "hidden" : ""}`} type="text" placeholder="Filter by location..." />
                <i className={`fas fa-filter fa-2x ${isMobile ? "" : "hidden"}`} onClick={filterActiveHandler}></i>
            </div>
            <div id="submit">
                <div className={`${isMobile ? "hidden" : ""}`}>
                    <label id="checkbox">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                    <p>Full Time</p>
                </div>
                <button>
                    <p className={`${isMobile ? "hidden" : ""}`}>Search</p>
                    <i className={`fas fa-search fa-lg ${isMobile ? "" : "hidden"}`}></i>
                </button>
            </div>

            <div id="overlay-filter" className={`overlay ${isMobile ? "" : "hidden"} ${filterActive ? "" : "hidden"}`}>
                <div id="overlay-checkbox-container" className = "overlay">
                    <label id="checkbox" className="overlay">
                        <input type="checkbox" className="overlay"/>
                        <span className="checkmark overlay"></span>
                    </label>
                    <p className="overlay">Full Time</p>
                </div>
                <div id="location-filter" className="overlay">
                    <i className="fas fa-map-marker-alt fa-2x overlay"></i>
                    <input className="overlay" type="text" placeholder="Filter by location..." />
                </div>
            </div>
        </div>
    );
}

export default Search;