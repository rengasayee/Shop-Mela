import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact(){
    const data = useActionData();

    return(
        <div className="contact">
            <h2>Contact Us</h2>

            <Form method="post" action="/help/contact" class="formdata">
                <label htmlFor="emailid">Your email: </label>
                <input type="email" id="emailid" name="email" />
                <br /><br />
                
                <label htmlFor="message">Your message: </label>
                <input type="text" id="message" name="message" />
                <br /><br />

                <button>Submit</button>

                {data && data.error && <p>{data.error}</p>}
            </Form>
        </div>
    );
}

export const contactAction = async ({request}) => {
    const data = await request.formData();

    const submission = {
        email: data.get('email'),
        message: data.get('message')
    }

    console.log(submission);

    if(submission.message.length < 10){
        return {error: 'Message must be over 10 chars long'};
    }

    return redirect('/');
}
