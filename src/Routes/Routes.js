import { createBrowserRouter } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import NotFound from "../Pages/NotFound/NotFound";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute";



const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async()=>{
          return fetch('http://localhost:5000/api/services/limit')
        }
      },
      {
        path: "/home",
        element: <Home />,
        loader: async()=>{
          return fetch('http://localhost:5000/api/services/limit')
        }
      },
      {
        path: "/services",
        element: <Services />
        
      },
      {
        path: "/service/details/:serviceId",
        element: <ServiceDetails />,
        loader: async({params})=>{
          return fetch(`http://localhost:5000/api/service/${params.serviceId}`)
        }
      },
      {
        path: "/my-reviews",
        element: <PrivateRoute><MyReviews /></PrivateRoute>,
      },
      {
        path: "/blog",
        element: <Blog/>,
      },
      {
        path: "/add-new-service",
        element: <PrivateRoute><AddService /></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
