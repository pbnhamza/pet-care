import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Loader from "../Components/Loader/Loader";
import Services from "../Pages/Services/Services";
import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import UpdateProfile from "../Pages/Profile/UpdateProfile";

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
        path: "/services/:id",
        Component: Services,
        loader: () => fetch("/pets.json"),
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/update",
        Component: UpdateProfile,
      },
    ],
  },
]);

export default router;
