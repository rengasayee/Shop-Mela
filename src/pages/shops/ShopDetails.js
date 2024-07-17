import { useLoaderData, useParams } from "react-router-dom";

export default function ShopDetails(){
    const { id } = useParams();
    const shop = useLoaderData();

    return(
        <div className="shop-details">
            <h2>SHOP DETAILS</h2>

            <p>Shop Name : {shop.title}</p>
            <p>Location : {shop.location}</p>
            <p>Been there for : {shop.existence} years</p>
            <div className="details">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti eaque, 
                    sint error soluta ducimus vel rem nobis 
                aliquam eos fugiat!</p>
            </div>
        </div>
    );
}

export const shopDetailsLoader = async ({ params }) => {
    const { id } = params;

    const details = await fetch('http://localhost:4000/shops/' + id);

    if(!details.ok){
        throw new Error("The shop doesn't exist");
    }

    return details.json();
}