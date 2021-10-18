import React from 'react';



const Job = ({ job }) => {
    return (
        <div id="job">
            <img src={job.logo} alt="" />
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