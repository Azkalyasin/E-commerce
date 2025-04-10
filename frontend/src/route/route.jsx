import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import Home from "../Page/Home.jsx/Home";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [

        {
            path:'/',
            Component: <Home/>
        },

    ]
  },
]);

export default router