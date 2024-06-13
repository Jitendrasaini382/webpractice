import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AllRouts } from "./Routes"

const Routing = () => {
    return <>
        <BrowserRouter>
            <Routes>
                {
                    AllRouts && AllRouts.map((e)=> <Route {...e}/> )
                    
                }
            </Routes>
        </BrowserRouter>
    </>
}
export default Routing