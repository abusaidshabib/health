import { createBrowserRouter } from "react-router-dom";
import AddServices from "../../DashBoard/AddServices/AddServices";
import MyReviews from "../../DashBoard/MyReviews/MyReviews";
import DashBoard from "../../Layout/DashBoard";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About/About";
import Contact from "../../Pages/Contact/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Services from "../../Pages/Services/Services";
import SingleService from "../../Pages/SingleService/SingleService";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/services",
        element: <PrivateRouter><Services></Services></PrivateRouter>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/service/:id",
        loader: ({ params }) => fetch(`https://health-plus-backend.vercel.app/service/${params.id}`),
        element: <PrivateRouter><SingleService></SingleService></PrivateRouter>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "/dashboard/add-services",
        element: <PrivateRouter><AddServices></AddServices></PrivateRouter>
      },
      {
        path: "/dashboard/my-review",
        element: <PrivateRouter><MyReviews></MyReviews></PrivateRouter>
      }
    ]
  }
])

export default router;