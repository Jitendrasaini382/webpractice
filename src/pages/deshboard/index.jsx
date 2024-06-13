import { useLocation } from "react-router-dom"

const Deshboard = ()=>{
    const location  = useLocation()
    console.log(location)
    return <>
    <h1>
        Deshboard
    </h1>
    </>
}
export default Deshboard