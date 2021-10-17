import React from 'react';
import Search from './Search';
import Jobs from './Jobs';

const Display = ({ isMobile, setFilterActive, filterActive}) => {
    return (
        <div id="display">
            <Search
                isMobile={isMobile}
                setFilterActive={setFilterActive}
                filterActive={filterActive}
            />
            <Jobs />
        </div>
    );
}

export default Display;