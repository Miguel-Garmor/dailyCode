import React from 'react';
import { useLocation } from 'react-router';

const JobDescription = () => {

    const location = useLocation();
    const job = location.state.from;



    return (
        <>
            <div class="jobDescription">
                <p>{ }</p>
            </div>
        </>
    );
}

export default JobDescription;