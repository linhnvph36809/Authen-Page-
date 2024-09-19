import { Outlet } from "react-router-dom"
import { handlerGetLocal } from "../../../local";

const GuestLayout = () => {
    const token = handlerGetLocal('accessToken');
    
    return (
        <div>
             {token ? <h1>Home</h1> : <Outlet/>}
        </div>
    )
}

export default GuestLayout