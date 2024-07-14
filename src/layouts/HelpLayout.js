import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout(){
    return (
        <div className="help-layout">
            <h1>Website help</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nam.</p>

            <nav>
                <NavLink to='faq'>Faq</NavLink>
                <NavLink to='contact'>Contact</NavLink>
            </nav>

            <Outlet />
        </div>
    );
}