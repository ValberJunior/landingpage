import { Routes, Route } from "react-router-dom";
import { Home, Privacity, Terms} from "../pages";

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/termos" element={<Terms/>}/>
            <Route path="/privacidade" element={<Privacity/>}/>          
        </Routes>
    )
}