import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Properties from "../pages/Properties/Properties";
import AboutUs from "../pages/AboutUs/AboutUs";
import Blog from "../pages/Blog/Blog";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Login/Login";
import BlogDetails from "../pages/Blog/BlogDetails/BlogDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/properties",
                element: <Properties/>
            },
            {
                path: "/about",
                element: <AboutUs/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: '/blogDetails',
                element: <BlogDetails/>
            },
            {
                path: "/contact",
                element: <ContactUs/>
            },
            {
                path: '/login',
                element: <Login/>
            }
            
        ]
    }
])