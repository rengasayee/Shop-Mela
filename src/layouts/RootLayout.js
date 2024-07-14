import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout(){
    return (
        <header>
            <h1>Shop-Mela</h1>

            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='help'>Help</NavLink>
                <NavLink to='shops'>Shops</NavLink>
            </nav>

            <Outlet />
        </header>
    );
}