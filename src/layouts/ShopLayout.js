import { Outlet } from "react-router-dom";

export default function ShopLayout(){
    return(
        <div className="shop-layout">
            <h1>Shops</h1>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, voluptatum?</p>

            <Outlet />
        </div>
    );
}