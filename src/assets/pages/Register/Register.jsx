import Lottie from "lottie-react";
import registerLottieData from '../../Lottie/register.json'
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext/AuthContext";
import SocialLogin from "../Shared/SocialLogin";
// import { useState } from "react";

const Register = () => {
    // const [error, setError] = useState({});
    const { createUser } = useContext(AuthContext);


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // password validation
        // show password validation error
        // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        // if (!passwordRegex.test(password)) {
        //     setError({ ...error, name: 'At least one uppercase, one lowercase, one number, and one special character & six character are required.' });
        //     alert('At least one uppercase, one lowercase, one numbers')
        //     return;

        // }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })

    };


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={registerLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <h2 className="text-4xl font-bold text-center">Register Now!</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="m-4 flex justify-center">
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;