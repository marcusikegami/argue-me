import { validateEmail } from '../../utils/helpers';
import React, { useState } from "react";

function Login() {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { username, email, password } = formState;
  
    const handleLoginSubmit = (event) => {
      event.preventDefault();
      if (!errorMessage) {
        setFormState({username: event.target.username.value, email: event.target.email.value, password: event.target.password.value});
        console.log('Form', formState);
        // setFormState({ username: '', email: '', password: '' });
      }

      
    };
  
    const handleChange = (event) => {
      if (event.target.username === 'email') {
        const isValid = validateEmail(event.target.value);
        if (!isValid) {
          setErrorMessage('Not a valid email.');
        } else {
          setErrorMessage('');
        }
      } else {
        if (!event.target.value.length) {
          setErrorMessage(`${event.target.username} is required.`);
        } else {
          setErrorMessage('');
        }
      }
    };
  
    return (
      <section>

       

        <h1 className="text-dark bg-primary p-2 display-inline-block">Login</h1>
        <div className="col-12 mb-2 bg-dark text-light p-3">
          <form id="contact-form" onSubmit={handleLoginSubmit}>
            <div>
              <label htmlFor="email">Email address:</label>
              <br/>
              <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <br/>
              <input type="password" name="password" defaultValue={password} onBlur={handleChange} />
            </div>
            
            <button type="submit">Submit</button>
          </form>
        </div>

        <h1 className="text-dark bg-primary p-2 display-inline-block">Signup</h1>
        <div className="col-12 mb-2 bg-dark text-light p-3">
          <form id="contact-form" onSubmit={handleLoginSubmit}>
            <div>
              <label htmlFor="username">Username:</label>
              <br/>
              <input type="text" name="username" defaultValue={username} onBlur={handleChange} />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <br/>
              <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <br/>
              <input type="password" name="password" defaultValue={password} onBlur={handleChange} />
            </div>
            
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    );
  }

export default Login;