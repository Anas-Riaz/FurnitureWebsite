import { Outlet } from "react-router";
import Navbar from "./Navbar.jsx";

export default function RootLayout(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}