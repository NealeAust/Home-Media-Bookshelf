import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';

import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';


const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });

  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...userFormData }
      });

      Auth.login(data.addUser.token)

    } catch (error) {
      console.error(error);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <div className="container-signup">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>

        <Form.Group>
          <Form.Label className="signup-label" htmlFor='username'>Username</Form.Label>
          <Form.Control
            id="control"
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback className="signup-message" type='invalid'>Username is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label className="signup-label" htmlFor='email'>Email</Form.Label>
          <Form.Control
            id="control"
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback className="signup-message" type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label className="signup-label" htmlFor='password'>Password</Form.Label>
          <Form.Control
          id="control"
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback className="signup-message" type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          id="submit"
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
      </div>
    </>
  );
};

export default SignupForm;