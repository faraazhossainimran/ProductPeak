
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SignUP from "../pages/SignUp/SignUP";
import Products from "../pages/Products/Products";
import Login from "../pages/Login/Login";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Dashboard from "../Layout/Dashboard";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import AddProducts from "../pages/Dashboard/AddProducts/AddProducts";

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
  {
    path: '/product/:id',
    element: <ProductDetails></ProductDetails>
},
      ]
    },
    {
      path: '/dashboard', 
      element: <Dashboard></Dashboard>, 
      children: [
        {
          path: '/dashboard',
          element: <MyProfile></MyProfile>
        },
        {
          path: 'myProfile',
          element: <MyProfile></MyProfile>
        },
        {
          path: 'addProducts',
          element: <AddProducts></AddProducts>
        }
      ]
    }
  ]);
export default router