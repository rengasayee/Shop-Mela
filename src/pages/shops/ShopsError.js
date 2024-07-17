import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ShopsError(){
    const error = useRouteError();

    return(
        <div className="error">
            <h2>Error</h2>
            <p>{error.message}</p>
            <Link to='/'>Homepage</Link>
        </div>
    );
}