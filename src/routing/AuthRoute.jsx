import { useEffect, useMemo, useState } from "react"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"
import { useNavigate } from "react-router-dom"


const AuthRoute = ({
    Component,
    type

})=>{
    const navigate = useNavigate();
    const [sessToken ,setToken]=useState(null)
    // const validateToken = useMemo(() => {
        
    // })
    // useEffect(()=>{

    // },[])
    if( type == "Private" && sessToken){
      return  <PrivateRoute  Component={Component}/>

    }
    else if(type=="Private" && !sessToken){
        navigate('/login')
    
    }
    else if(type == "Public" && sessToken){
        navigate("/deshboard")
    }
    else{
        return <PublicRoute  Component={Component}/>
    }

}
export default AuthRoute