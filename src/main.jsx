import React from "react";
import ReactDOM from "react-dom/client";
import Introduce from "./pages/introduce";
import App from "./App";
import "./assets/tailwind.css";
import routes from "./routes";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
