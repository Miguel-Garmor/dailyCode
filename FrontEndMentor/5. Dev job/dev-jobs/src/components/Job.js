import React from 'react';
import Jobs from './Jobs';



const Job = ({ job }) => {
    return (
        <div id="job">
            <div id="thumb-img" style={{ backgroundColor: job.logoBackground }}>
                <img src={job.logo} />
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
    );
}

export default Job;