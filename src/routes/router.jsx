
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
import MyProducts from "../pages/Dashboard/MyProducts/MyProducts";
import PrivateRoute from "./PrivateRoute";
import ProductReviewQueue from "../pages/Dashboard/ProductReviewQueue/ProductReviewQueue";
import ReportedContents from "../pages/Dashboard/ReportedContents/ReportedContents";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
    element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
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
        },
        {
          path: 'myProducts',
          element: <MyProducts></MyProducts>
        },
        {
          path: 'productReviewQueue',
          element: <ProductReviewQueue></ProductReviewQueue>
        },
        {
          path: 'reportedContents',
          element: <ReportedContents></ReportedContents>
        },
        {
          path: 'manageUsers',
          element: <ManageUsers></ManageUsers>
        },
      ]
    }
  ]);
export default router