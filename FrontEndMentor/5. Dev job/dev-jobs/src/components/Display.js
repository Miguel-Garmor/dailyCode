import React from 'react';
import Search from './Search';
import Jobs from './Jobs';

const Display = ({ isMobile, setFilterActive, filterActive, setSearchQuery, searchQuery, setSearchLocation, searchLocation, setIsFullTime, isFullTime, setFilteredJobs, filteredJobs, jobs }) => {
    return (
        <div id="display">
            <Search
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
            <Jobs
                filteredJobs={filteredJobs}
            />
        </div>
    );
}

export default Display;