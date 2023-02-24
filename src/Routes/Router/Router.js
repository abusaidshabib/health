import { createBrowserRouter } from "react-router-dom";
import AddServices from "../../DashBoard/AddServices/AddServices";
import MyReviews from "../../DashBoard/MyReviews/MyReviews";
import DashBoard from "../../Layout/DashBoard";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Services from "../../Pages/Services/Services";

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
        element: <Services></Services>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "/dashboard/add-services",
        element: <AddServices></AddServices>
      },
      {
        path: "/dashboard/my-review",
        element: <MyReviews></MyReviews>
      }
    ]
  }
])

export default router;