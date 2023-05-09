import React from 'react';
import { useState } from 'react';
import '../App.css'
import { validateEmail } from '../utils/helpers';

function ContactForm() {
  const [inputs, setInputs] = useState({});
  // Input triggers a change in the value of the input field. 
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  //Submits form data that's been validated.    
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validation of email conducted including a test and notification if invalid 
    var test = validateEmail(inputs.email)
    console.log(inputs.email)
    console.log(test)
    if (!validateEmail(inputs.email)) {
      console.log("invalid email")
      alert('Email is invalid, please try again!');
      return;
    }
    alert('Thankyou for contacting me, I will reply to you as soon as possible.')
  }

  return (

    <div className="container">

      <form onSubmit={handleSubmit}>

        <h1 id="heading" >Contact Me</h1>

        <label> Enter your name:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
            required
          />
        </label>
        <label> Enter your email address:
          <input
            type="email"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            required
          />
        </label>

        <label> Enter a message:

          <textarea
            type="text"
            name="textarea"
            value={inputs.textarea || ""}
            onChange={handleChange}
            required
          />

        </label>
        <input type="submit" id="submit" />
      </form>

    </div>
  )
}

export default ContactForm;  