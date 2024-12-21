import React from 'react';

const AddJob = () => {
    return (
        <div>
            <h2 className="text 3xl">post a new job</h2>
            {/* Job Title */}
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Job Title" className="input input-bordered" required />
                </div>
                {/* Job Location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input type="text" name='location' placeholder="Job Location" className="input input-bordered" required />

                </div>

                {/* Job type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Pick a Job type?</option>
                        <option>Full-time</option>
                        <option>Intern</option>
                        <option>Part_time</option>
                    </select>
                </div>

                {/* Job field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Field</span>
                    </label>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Pick a Job field</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Teaching</option>
                    </select>
                </div>
                {/* salary range */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input type="text" name='min' placeholder="min" className="input input-bordered" required />
                    </div>

                    <div className="form-control">

                        <input type="text" name='max' placeholder="max" className="input input-bordered" required />
                    </div>

                    <div className="form-control">

                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                        </select>
                    </div>
                </div>

                {/* Job Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Job Title" className="input input-bordered" required />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;