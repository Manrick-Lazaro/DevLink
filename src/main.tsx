import React from "react";
import ReactDOM from "react-dom/client";
import { Routers } from "./App.tsx";
import { RouterProvider } from 'react-router-dom'
import "./input.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
    <RouterProvider router={Routers}/>
  </React.StrictMode>,
);
