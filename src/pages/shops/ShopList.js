import { Link, useLoaderData } from "react-router-dom";

export default function ShopList(){
    const shops = useLoaderData();

    return(
        <div className="shop-list">
            {
                shops.map(shop => (
                    <Link to={shop.id.toString()} key={shop.id} className='shop-instance'>
                        <p>{shop.title}</p>
                        <p>{shop.location}</p>
                    </Link>
                ))
            }
        </div>
    );
}

//data loader

export const shopsLoader = async () => {
    const res = await fetch('http://localhost:4000/shops');

    return res.json();
}