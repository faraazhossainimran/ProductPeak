import { Outlet } from "react-router-dom"
import NavBar from "../shared/Navbar/NavBar"
import Footer from "../shared/Footer/Footer"
import Banner from "../pages/Home/Banner/Banner"


const Main = () => {
    return (
        <div>
            <div className="md:w-[1000px] mx-auto ">
            <NavBar></NavBar>
            
           <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </div>
    )
}

export default Main