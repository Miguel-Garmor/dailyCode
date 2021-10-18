import React from 'react';
import Job from './Job';

const Jobs = ({ filteredJobs }) => {
    return (
        <div id="jobs">
            {
                filteredJobs.map(job => (
                    <Job
                        key={job.id}
                        job={job}
                    />
                ))
            }
        </div>
    );
}

export default Jobs;