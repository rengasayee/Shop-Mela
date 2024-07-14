export default function Contact(){
    return(
        <div className="contact">
            <h2>Contact Us</h2>

            <form>
                <label htmlFor="emailid">Your email: </label>
                <input type="email" id="emailid" />
                <br /><br />
                
                <label htmlFor="message">Your message: </label>
                <input type="text" id="message" />
            </form>
        </div>
    );
}