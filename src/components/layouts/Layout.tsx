import { Outlet } from "react-router-dom"
import Header from "../elements/Header"
import Footer from "../elements/Footer"


const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout