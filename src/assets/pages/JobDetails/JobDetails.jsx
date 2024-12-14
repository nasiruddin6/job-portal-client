import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {title, company, deadline} = useLoaderData();
    // console.log('jorina',job);


    return (
        <div className='m-10'>
            <h2 className='text-3xl font-semibold'>Job Details: {title}</h2>
            <p>Apply for {company}</p>
            <p>deadline: {deadline}</p>
            <button className='btn btn-primary'>Apply Now</button>
        </div>
    );
};

export default JobDetails;