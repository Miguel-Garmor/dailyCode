import React from 'react';

const Search = () => {
    return (
        <div id="search">
            <div id="text-filter">
                <i class="fas fa-search fa-2x"></i>
                <input type="text" placeholder="Filter by title, companies, expertise... " />
            </div>
            <div id="location-filter" >
                <i class="fas fa-map-marker-alt fa-2x"></i>
                <input type="text" placeholder="Filter by location..." />
            </div>
            <div id="submit">

                <label class="checkbox">
                    <input type="checkbox" />
                    <span>Check Me</span>
                </label>

                <button>Search</button>
            </div>
        </div>
    );
}

export default Search;