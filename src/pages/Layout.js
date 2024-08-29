import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Scroll from "../components/scroll/Scroll";

function Layout() {
    return (
        <>
            <Header/>
            <div className="container">
                <Outlet/>
            </div>
            <Scroll/>
        </>
    )
}

export default Layout;