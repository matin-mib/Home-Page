import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import './layout.css'


const Layout = () => {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout