import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../assets/LayOut/MainLayOut";
import Home from "../assets/pages/Home/Home";
import Register from "../assets/pages/Register/Register";
import SignIn from "../assets/pages/signin/SignIn";
import JobDetails from "../assets/pages/JobDetails/JobDetails";
import PrivetRoute from "./PrivetRoute";
import JobApply from "../assets/pages/JobApply/JobApply";
import MyApplications from "../assets/pages/MyApplications/MyApplications";
import AddJob from "../assets/pages/AddJob/AddJob";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement: <h2>Route Not Found</h2>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: 'jobs/:id',
          element: <PrivetRoute><JobDetails></JobDetails></PrivetRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path: 'jobApply/:id',
          element: <PrivetRoute>  <JobApply></JobApply></PrivetRoute>,
        },
        {
          path: 'myApplications',
          element: <PrivetRoute><MyApplications></MyApplications></PrivetRoute>
        },
        {
          path: 'addJob',
          element: <PrivetRoute> <AddJob></AddJob></PrivetRoute>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
          path: 'signIn',
          element: <SignIn></SignIn>
        }
      ]
    },
  ]);

  export default router;