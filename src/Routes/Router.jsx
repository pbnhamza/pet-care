import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Loader from "../Components/Loader/Loader";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import UpdateProfile from "../Pages/Profile/UpdateProfile";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

import Profile from "../Pages/Profile/Profile";
import Services from "../Pages/Services/Services";
import About from "../Pages/About";
import AllServices from "../Components/All-Servises/AllServices";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <Loader></Loader>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/pets.json"),
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-services",
        element: <AllServices></AllServices>,
        loader: () => fetch("/pets.json"),
      },
      {
        path: "/services/:id",
        element: <Services></Services>,
        loader: () => fetch("/pets.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            <Profile></Profile>
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        Component: Register,
      },

      {
        path: "/update",
        Component: UpdateProfile,
      },
      {
        path: "/about",
        Component: About,
      },
    ],
  },
]);

export default router;
