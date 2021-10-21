import React from 'react';
import { useLocation } from "react-router";

const Footer = () => {

const location = useLocation();
const job = location.state.from;

    return(
        <footer className="footer">
            <section>
                <div>
                    <h1>{job.position}</h1>
                    <h2><a>{job.company}</a></h2>
                </div>
                <div>
                    <button>Apply Now</button>
                </div>
            </section>
        </footer>
    );
    
}

export default Footer;