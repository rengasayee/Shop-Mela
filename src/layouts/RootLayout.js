import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../pages/components/Breadcrumbs";

export default function RootLayout(){
    return (
        <header>
            <h1>Shop-Mela</h1>

            <nav className="root">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='help'>Help</NavLink>
                <NavLink to='shops'>Shops</NavLink>
            </nav>

            <Breadcrumbs />
            
            <Outlet />
        </header>
    );
}