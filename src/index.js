import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import "./index.css";


import App from "./App";
import Home from "./pages/Home";
import NewProject from "./pages/NewProject";
import Projects from "./pages/Projects";
import Project from "./pages/Project_ID";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/newproject",
        element: <NewProject />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/project/:id",
        element: <Project />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
