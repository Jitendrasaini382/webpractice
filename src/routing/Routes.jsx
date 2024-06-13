// import Home from "../pages/Home";
import { lazy } from "react";
import Deshboard from "../pages/deshboard";
import ErrorPage from "../pages/error";
import Login from "../pages/login";
import AuthRoute from "./AuthRoute";
const Home = lazy(()=>import('../pages/Home'))


export const AllRouts = [
    {
        element: <AuthRoute Component={Home} type={"Private"}/>,
         path:"/" 
    },
    {
        element:<AuthRoute Component={Deshboard} type={"Private"}/>,
        path:"/deshboard"
    },{
        element: <AuthRoute Component={Login} type={"Public"} />,
        path:"/login"
    },
    {
        element:<ErrorPage/>,
        path:"*"
    }
]