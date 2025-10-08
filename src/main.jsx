import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./Pages/Home";
import axios from "axios";
import Loading from "./Components/Loading.jsx";
import Root from "./Root.jsx";
import AllApps from "./Pages/AllApps.jsx";
import AppDetails from "./Pages/AppDetails.jsx";
import Installation from "./Pages/Installation.jsx";
import NotFound from "./Pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <Loading></Loading>,

    children: [
      {
        index: true,
        Component: Home,
        loader: async () => (await axios("/apps.json")).data,
      },
      {
        path: "/apps",
        loader: async () => (await axios("/apps.json")).data,
        Component: AllApps,
      },
      {
        path: "/apps/:id",
        loader: async () => (await axios("/apps.json")).data,
        Component: AppDetails,
      },
      {
        path: "/installation",
        loader: async () => (await axios("/apps.json")).data,
        Component: Installation,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
