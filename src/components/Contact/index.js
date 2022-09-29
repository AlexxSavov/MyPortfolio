import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });


    const { name, email, message } = formState;

    function handleSubmit(e) {
        e.preventDefault();
    }

return (
    <section class="justify-content-center" id="contact-section">
        <h1 data-testid='h1tag' className="contact">contact: Alexandre Savov</h1>
        <hr></hr>
        <form class="justify-content-center" id="contact-form">
            <div>
                <label htmlFor="name">Name:</label>
                <input class="form-control"
                 type="text" 
                 name="name"  
                 defaultValue={name} 
                 onBlur={handleChange}/>
            </div>
            <div >
                <label htmlFor="email">Email:</label>
                <input class="form-control"
                 type="email" 
                  name="email" 
                  defaultValue={email} 
                  onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea class="form-control" 
                name="message"
                 defaultValue={message} 
                 onBlur={handleChange} rows="7" />
            </div> 
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}

            <div>
            <button data-testid='button' 
            class="btn btn-outline-dark mt-4" 
            type="submit" onSubmit={handleSubmit}>Submit</button>
            </div>
        </form>
    </section>
    );
}
    
export default ContactForm;