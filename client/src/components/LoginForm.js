import React from 'react';
import { useState } from 'react';
import '../App.css'
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [loginUser, { error }] = useMutation(LOGIN_USER);

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
      const { data } = await loginUser({
        variables: {...userFormData}
      });

      Auth.login(data.loginUser.token); 
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
    <div className="container-login">
        <Form noValidate validated={validated} onSubmit={handleSubmit} >
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group >
          <Form.Label className="login-label" htmlFor='email'>Email</Form.Label>
          <Form.Control
            id="control"
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback className="login-message" type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label className="login-label" htmlFor='password'>Password</Form.Label>
          <Form.Control
            id="control"
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback className="login-message" type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          id="submit"
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </div>
    </>
  );
};

export default LoginForm;
