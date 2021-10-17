import React from 'react';
import Display from './Display'


const Nav = ({ isMobile }) => {

    return (
        <nav>
            <div id="header-container">

                <div id="logo" ><p>devJobs</p></div>
                <div id="theme">
                    <i className="fas fa-sun fa-lg"></i>
                    <div id="theme-switch">
                        <div></div>
                    </div>
                    <i className="fas fa-moon fa-lg"></i>
                </div>
            </div>
            <Display
                isMobile={isMobile}
            />
        </nav>

    );
}

export default Nav;