import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignIn/Signup";
import Secret from "../Pages/Secret/Secret";
import Privetroute from "./Privetroute";
import Dashboard from "../Layout/Dashboard";
import Mycart from "../Pages/DashBoard/Mycart/Mycart";
import Allusers from "../Pages/DashBoard/Allusers/Allusers";
import Additem from "../Pages/DashBoard/Additem/Additem";
import Adminroute from "./Adminroute";
import Manageitems from "../Pages/DashBoard/Manageitems/Manageitems";
import Payment from "../Pages/DashBoard/Payment/Payment";
import Adminhome from "../Pages/DashBoard/Adminhome/Adminhome";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/secret',
          element:<Privetroute><Secret></Secret></Privetroute>
        }
      ]
    },
    {
      
      path:'/dashboard',
      element:<Privetroute><Dashboard></Dashboard></Privetroute>,
      children:[
           {
           path:'mycart',
           element:<Mycart></Mycart>
          },
          {
            path:'allusers',
            element:<Adminroute><Allusers></Allusers></Adminroute>
          },
          {
            path:'additem',
            element:<Adminroute><Additem></Additem></Adminroute>

          },{
            path:'manageitems',
            element:<Adminroute><Manageitems></Manageitems></Adminroute>
          },
          {
            path:'payment',
            element:<Payment></Payment>
          },
          {
            path:'adminhome',
            element:<Adminroute><Adminhome></Adminhome></Adminroute>
          },
          {
            path:'userhome',
            element:<UserHome></UserHome>
          }

      ]
    }
  ]);


