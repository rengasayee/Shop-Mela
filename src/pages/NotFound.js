import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div className="error">
            <h1>OOPS! There is some problem here.</h1>
            <br /><br />
            <Link to='/'>Homepage</Link>
        </div>
    );
}