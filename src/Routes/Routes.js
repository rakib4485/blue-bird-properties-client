import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Properties from "../pages/Properties/Properties";
import AboutUs from "../pages/AboutUs/AboutUs";
// import Blog from "../pages/Blog/Blog";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Login/Login";
import SignIn from "../pages/SignIn/SignIn";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails/PropertyDetails";
import BlogDetails from "../pages/Blog/BlogDetails/BlogDetails";
import BookingPage from "../pages/BookingPage/BookingPage";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import AddProperty from "../pages/Dashboard/AddProperty/AddProperty";
import MyPropertyBookings from "../pages/Dashboard/MyPropertyBookings/MyPropertyBookings";
import MyProperty from "../pages/Dashboard/MyProperty/MyProperty";
import AllBookings from "../pages/Dashboard/AllBookings/AllBookings";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";

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
                element: <PrivateRoutes><PropertyDetails></PropertyDetails></PrivateRoutes>,
                loader: ({params}) =>{
                    return fetch(`http://localhost:5000/propertyDetails/${params.id}`)
                }
            },
            {
                path: "/propertyDetails/:id/booking",
                element: <BookingPage/>,
                loader: ({params}) =>{
                    return fetch(`http://localhost:5000/propertyDetails/${params.id}`)
                }
            },
            {
                path: "/about",
                element: <AboutUs/>
            },
            // {
            //     path: "/blog",
            //     element: <Blog/>
            // },
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
            },
            {
                path: '/signup',
                element: <SignIn/>
            }
            
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout/></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: "/dashboard/myPropertyBookings",
                element: <MyPropertyBookings/>
            },
            {
                path: "/dashboard/myProperty",
                element: <MyProperty/>
            },
            {
                path: "/dashboard/addProperty",
                element: <AddProperty/>
            },
            {
                path: "/dashboard/allUser",
                element: <AllUsers/>
            },
            {
                path: "/dashboard/allBookings",
                element: <AllBookings/>
            }
        ]
    }
])