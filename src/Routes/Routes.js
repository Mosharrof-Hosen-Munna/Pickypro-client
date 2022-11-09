import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import NotFound from "../Pages/NotFound/NotFound";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";

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
        element: <Services />,
        loader: async()=>{
          return fetch('http://localhost:5000/api/services')
        }
        
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
        element: <MyReviews />,
      },
      {
        path: "/add-new-service",
        element: <AddService />,
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
