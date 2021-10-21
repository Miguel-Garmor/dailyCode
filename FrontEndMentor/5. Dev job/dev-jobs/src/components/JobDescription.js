import React from 'react';
import { useLocation } from 'react-router';
import Footer from './Footer';

const JobDescription = () => {

    const location = useLocation();
    const job = location.state.from;

    const requirementsArray = job.requirements.items;
    const reqListItems = requirementsArray.map(item =>
        <li><span>{item}</span></li>
    );

    const roleArray = job.role.items;
    const roleListItems = roleArray.map(item =>
        <li><span>{item}</span></li>
    );

    return (
        <div class="GlobalJobDes">
            <div className="jobDescription">
                <div className="jobDescription-header" >
                    <div className="jobDescription-img" style={{ background: job.logoBackground }}>
                        <img src={job.logo} alt="" />
                    </div>

                    <div className="jobDescription-rest">
                        <section>
                            <div>
                                <h1>{job.company}</h1>
                                <h2><a>{job.company}.com</a></h2>
                            </div>
                            <div>
                                <button>Company Site</button>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="jobDescription-content">
                    <div >
                        <section>
                            <p>{job.postedAt} • {job.contract}</p>
                            <h1>{job.position}</h1>
                            <h3>{job.location}</h3>
                            <button>Apply Now</button>
                        </section>

                        <p>{job.description}</p>
                        <h2>Requirements</h2>
                        <p>{job.requirements.content}</p>
                        <ul>
                            {reqListItems}
                        </ul>
                        <h2>What you will do</h2>
                        <p>{job.role.content}</p>
                        <ol>
                            {roleListItems}
                        </ol>
                    </div>

                </div>

            </div>
            <Footer />
        </div>

    );
}

export default JobDescription;