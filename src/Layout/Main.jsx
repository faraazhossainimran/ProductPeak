import { Outlet } from "react-router-dom"
import NavBar from "../shared/Navbar/NavBar"


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
           <Outlet></Outlet>
        </div>
    )
}

export default Main