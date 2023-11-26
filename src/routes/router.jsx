
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SignUP from "../pages/SignUp/SignUP";
import Products from "../pages/Products/Products";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/products',
          element: <Products></Products>
      },
      {
        path: '/signup',
        element: <SignUP></SignUP>
    },
    {
      path: '/login',
      element: <Login></Login>
  },
      ]
    },
  ]);
export default router