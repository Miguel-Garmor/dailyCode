import React from 'react';
import Search from './Search';
import Jobs from './Jobs';

const Display = ({ isMobile }) => {
    return (
        <div id="display">
            <Search
                isMobile={isMobile}
            />
            <Jobs />
        </div>
    );
}

export default Display;