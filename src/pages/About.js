import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About(){
    const [user,setUser] = useState('John');

    if(!user){
        return <Navigate to='/' replace></Navigate>
    }
    return(
        <div className="about">
            <h1>About Us</h1>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci sed, blanditiis laborum ad cumque qui dolore libero natus suscipit doloremque?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deleniti ipsam quibusdam non quam ipsa recusandae incidunt! Facilis, alias ratione.</p>
        
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae illo nostrum quia quaerat vel tenetur voluptates itaque enim totam!</p>
        
            <button onClick={() => setUser(null)} className="logout">Logout</button>
        </div>
    );
}