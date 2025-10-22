import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Loader from "../Components/Loader/Loader";
import PetCard from "../Components/PetCard/PetCard";
import Tips from "../Components/Tips/Tips";
import Services from "../Pages/Services/Services";

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
        path: "/services",
        Component: Services,
      },
      {
        path: "/profile",
        Component: Services,
      },
    ],
  },
]);

export default router;
