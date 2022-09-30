import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';

function ContactForm() {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

 const { name, email, message } = formState;

 const isButtonDisabled = nameError || emailError || messageError;

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }


  const validateName = (e) => {
    if (!e.target.value.length) {
      setNameError(`${e.target.name} is required`);
    } else {
      setNameError('');
    } 
  }

  const validateMessage = (e) => {
    if (!e.target.value.length) {
      setMessageError(`${e.target.name} is required`);
    } else {
      setMessageError('');
    }
  }

  const validateEmailForm = (e) =>{
    if (e.target.value === '') {
      setEmailError('Email is required');
    } else {
      const isValid = validateEmail(e.target.value);
  
      if (!isValid) {
        setEmailError('You entered an invalid Email, please enter a valid Email');
      } else {
        setEmailError('');
      }
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // clear the inputs of the form
  }

  return (
    <section className="justify-content-center" id="contact-section">
      <h1 data-testid='h1tag' className="contact">contact: Alexandre Savov</h1>
      <hr></hr>
      <form className="justify-content-center contact-form" onSubmit={handleSubmit}>
        <div>
          <label className="contact-form__label" htmlFor="name">Name:</label>
          <input
            className={`form-control contact-form__input ${nameError && 'error-input'}`}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            onBlur={validateName}
          />
          {nameError && <p className='error-text'>{nameError}</p>}
        </div>
        <div >
          <label htmlFor="email"  className='contact-form__label'>Email:</label>
          <input
            className={`form-control contact-form__input ${emailError && 'error-input'}`}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={validateEmailForm}
          />
          {emailError && <p className='error-text'>{emailError}</p>}
        </div>
        <div>
          <label htmlFor="message" className='contact-form__label'>Message:</label>
          <textarea
            className={`form-control contact-form__input ${messageError && 'error-input'}`}
            name="message"
            value={message}
            onChange={handleChange}
            onBlur={validateMessage}
            rows="7"
          />
          {messageError && <p className='error-text'>{messageError}</p>}
        </div>
        <div>
          <button
            data-testid='button'
            className="btn btn-outline-dark mt-4"
            type="submit"
            disabled={isButtonDisabled}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;