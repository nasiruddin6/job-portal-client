import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../assets/LayOut/MainLayOut";
import Home from "../assets/pages/Home/Home";
import Register from "../assets/pages/Register/Register";
import SignIn from "../assets/pages/signin/SignIn";

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