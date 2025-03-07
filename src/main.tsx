import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import {  RouterProvider } from "react-router-dom";
import router from "./route";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode> 
      <StyledEngineProvider injectFirst>
        <RouterProvider router={router} />
      </StyledEngineProvider> 
  </React.StrictMode>
);
