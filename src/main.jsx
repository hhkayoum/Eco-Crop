import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider";
import Register from "./page/Register/Register";
import Login from "./page/Login/Login";
import Root from "./components/Root/Root";
import Home from "./page/Home/Home";
import AboutUs from "./page/Footer/AboutUs/AboutUs";
import ContactUs from "./page/Footer/ContactUs/ContactUs";
import AddProduct from "./page/Navbar/AddCard/AddProduct";
import AvailableFoods from "./page/Navbar/AvailableFoods/AvailableFoods";
import SingleCardDetails from "./page/Navbar/SingleCardDetails/SingleCardDetails";
import PrivateRout from "./PrivateRout/PrivateRout";
import ManageMyFood from "./page/Navbar/ManageMyFood/ManageMyFood";
import Update from "./page/Navbar/ManageMyFood/Update";
import MyFoodRequest from "./page/Navbar/MyFoodRequest/MyFoodRequest";
import ManageSingleFood from "./page/Navbar/ManageMyFood/ManageSingleFood";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRout>
            <AddProduct></AddProduct>
          </PrivateRout>
        ),
      },
      {
        path: "/availableFoods",
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "/manageMyFood",
        element: (
          <PrivateRout>
            <ManageMyFood></ManageMyFood>
          </PrivateRout>
        ),
      },
      {
        path: `/update/:id`,
        element: (
          <PrivateRout>
            <Update></Update>
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment11-server-kohl.vercel.app/food/${params.id}`
          ),
      },
      {
        path: `/singleCardDetails/:id`,
        element: (
          <PrivateRout>
            <SingleCardDetails></SingleCardDetails>
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment11-server-kohl.vercel.app/food/${params.id}`
          ),
      },
      {
        path: "/myFoodRequest",
        element: (
          <PrivateRout>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRout>
        ),
      },
      {
        path: "/manageSingleFood/:id",
        element: (
          <PrivateRout>
            <ManageSingleFood></ManageSingleFood>
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment11-server-kohl.vercel.app/food/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
