import React from 'react';
import Display from './Display'


const Nav = () => {

    return (
        <nav>
            <div id="header-container">

                <div id="logo" ><p>devJobs</p></div>
                <div id="theme">
                    <i class="fas fa-sun fa-lg"></i>
                    <div id="theme-switch">
                        <div></div>
                    </div>
                    <i class="fas fa-moon fa-lg"></i>
                </div>
            </div>
            <Display />
        </nav>

    );
}

export default Nav;