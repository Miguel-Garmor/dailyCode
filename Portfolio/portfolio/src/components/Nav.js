import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Nav = () => {

    const navStyle = {
        color: "white",
        textDecoration: "none"
    };
    return (
        <nav>
            <div>
                <h1>Miguel Moral</h1>
                <ul>
                    <Link style={navStyle} to="/">
                        <li>Home</li>
                    </Link>
                    <Link style={navStyle} to="/Projects">
                        <li>Projects</li>
                    </Link>
                    <Link style={navStyle} to="/Story">
                        <li>Story</li>
                    </Link>
                    <Link style={navStyle} to="/Contact">
                        <li>Contact</li>
                    </Link>

                </ul>
            </div>
        </nav>
    );
}

export default Nav;