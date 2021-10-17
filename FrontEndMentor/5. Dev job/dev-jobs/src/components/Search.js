import React from 'react';



const Search = ({ isMobile }) => {



    return (
        <div id="search">
            <div id="text-filter">
                <i className="fas fa-search fa-2x"></i>
                <input type="text" placeholder="Filter by title, companies, expertise... " />
            </div>
            <div id="location-filter">
                <i className={`fas fa-map-marker-alt fa-2x ${isMobile ? "hidden" : ""}`}></i>
                <input className={`${isMobile ? "hidden" : ""}`} type="text" placeholder="Filter by location..." />
                <i className={`fas fa-filter fa-2x ${isMobile ? "" : "hidden"}`}></i>
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
        </div>
    );
}

export default Search;