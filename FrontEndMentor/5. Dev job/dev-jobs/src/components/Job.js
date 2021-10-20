import React from 'react';
import { Link } from 'react-router-dom';



const Job = ({ job }) => {
    return (
        <Link to={{
            pathname:"/description",
            state: {
                from: job
            }
        }}
            style={{ textDecoration: "none" }}>

            <div id="job">
                <div id="thumb-img" style={{ backgroundColor: job.logoBackground }}>
                    <img src={job.logo} alt="" />
                </div>
                <div id="short-description">
                    <p>{job.postedAt} - {job.contract}</p>
                    <p>{job.position}</p>
                    <p>{job.company}</p>
                </div>
                <div id="country">
                    <p>{job.location}</p>
                </div>
            </div>
        </Link>
    );
}

export default Job;