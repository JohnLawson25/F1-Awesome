import Footer from "./components/footer";
import NavBar from "./components/navBar";
import { Outlet } from "react-router";
const Layout = () => {

    return(
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
};

export default Layout;