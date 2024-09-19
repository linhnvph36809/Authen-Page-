import { Outlet } from "react-router-dom"

const GuestLayout = () => {
    const token = localStorage.getItem('accessToken');
    
    return (
        <div>
             {token ? <h1>Home</h1> : <Outlet/>}
        </div>
    )
}

export default GuestLayout