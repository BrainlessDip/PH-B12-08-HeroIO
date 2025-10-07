import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./Pages/Home";
import Apps from "./Pages/Apps.jsx";
import axios from "axios";
import Loading from "./Components/Loading.jsx";
import Root from "./Root.jsx";
import AllApps from "./Pages/AllApps.jsx";

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
        Component: Apps,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
