import { Outlet, useNavigate } from "react-router-dom"
import HeaderAdmin from "../elements/HeaderAdmin"
import FooterAdmin from "../elements/FooterAdmin"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const AdminLayout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem("token")){
            navigate("/login");
        }
    })
    return (

        <>
            <HeaderAdmin />
            <Outlet />
            <ToastContainer />
            <FooterAdmin />
        </>

    )
}
export default AdminLayout