import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {_id, title, company, deadline } = useLoaderData();
    // console.log('jorina',job);


    return (
        <div className='m-10'>
            <h2 className='text-3xl font-semibold'>Job Details: {title}</h2>
            <p>Apply for {company}</p>
            <p>deadline: {deadline}</p>
            <Link to={`/jobApply/${_id}`}>
                <button className='btn btn-primary'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;