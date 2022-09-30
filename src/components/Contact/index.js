import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';

function ContactForm() {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const validateLength = (e) => {
    if (!e.target.value.length) {
      setErrorMessage(`${e.target.name} is required.`);
    } else {
      setErrorMessage('');
    }
  }

  const validateEmailForm = (e) =>{
    const isValid = validateEmail(e.target.value);

    if (!isValid) {
      setErrorMessage('You entered an invalid Email, please enter a valid Email');
    } else {
      setErrorMessage('');
    }
  }



  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="justify-content-center" id="contact-section">
      <h1 data-testid='h1tag' className="contact">contact: Alexandre Savov</h1>
      <hr></hr>
      <form className="justify-content-center" id="contact-form">
        <div>
          <label className="contact-form__label" htmlFor="name">Name:</label>
          <input className="form-control contact-form__input"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            onBlur={validateLength}
          />
        </div>
        <div >
          <label htmlFor="email"  className='contact-form__label'>Email:</label>
          <input
            className="form-control contact-form__input"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={validateEmailForm} />
        </div>
        <div>
          <label htmlFor="message" className='contact-form__label'>Message:</label>
          <textarea
            className="form-control contact-form__input"
            name="message"
            value={message}
            onChange={handleChange}
            onBlur={validateLength}
            rows="7"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

        <div>
          <button data-testid='button'
            className="btn btn-outline-dark mt-4"
            type="submit" onSubmit={handleSubmit}>Submit</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;