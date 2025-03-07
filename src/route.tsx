import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./App";
import React from "react";
import Home from "./pages/Home";
import Moduli from "./pages/Moduli";
import Nuovo from "./pages/Nouvo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "moduli",
        element: <Moduli />,
      },
      {
        path: "nouvo",
        element: <Nuovo />,
      },
    ],
  },
]);

export default router;
