import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import Home from "../Page/Home/Home";
import Collection from "../Page/Collection/Collection";
import About from "../Page/About/About";
import Contact from "../Page/Contact/Contact";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [

        {
            path:'/',
            Component: Home
        },
        {
            path:'/Collection',
            Component: Collection
        },
        {
            path:'/About',
            Component:About
        },
        {
            path:'/Contact',
            Component:Contact
        }
    ]
  },
]);

export default router