import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Properties from "../pages/Properties/Properties";
import AboutUs from "../pages/AboutUs/AboutUs";
import Blog from "../pages/Blog/Blog";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Login/Login";
import SignIn from "../pages/SignIn/SignIn";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails/PropertyDetails";

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
                path: "/propertyDetails/:id",
                element: <PropertyDetails/>,
                loader: ({params}) =>{
                    return fetch(`http://localhost:5000/propertyDetails/${params.id}`)
                }
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
                path: "/contact",
                element: <ContactUs/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignIn/>
            }
            
        ]
    }
])