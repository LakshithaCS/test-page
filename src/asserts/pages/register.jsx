import React from 'react';
import Template from './template';
import Logo from './logo';
import { Link } from 'react-router-dom';

export default function Register() {
  
  const logo = <Logo />
  const form = <Form />

  return (
    <div>
      <Template left={logo} right={form} />
    </div>
  );
}


function Form() {

  return (

      <form>
        <div className="text-center">
          <h1>Register</h1>
        </div>
        
        <div className="mb-3">
          <label for="fullName" className="form-label">Full Name</label>
          <input type="Name" className="form-control" id="fullName"></input>
        </div>

        <div className="mb-3">
          <label for="Email1" className="form-label">Email</label>
          <input type="email" className="form-control" id="Email1" aria-describedby="emailHelp"></input>
        </div>
  
        <div className="mb-3">
          <label for="Password1" className="form-label">Password</label>
          <input type="password" className="form-control" id="Password1"></input>
        </div>

        <div className="mb-3">
          <label for="Password2" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="Password2"></input>
        </div>

        <label className="custom-file-label" for="validatedCustomFile">Confirmation Letter</label>
        <div className="mb-3">
          <input type="file" className="custom-file-input" id="validatedCustomFile" required></input>
          <div className="invalid-feedback">Choose Correct Format</div>
        </div>
 
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-block btn-primary">Register</button>
        </div>

        <div>
          <small>Already have an account? <Link to='/Login'>Login</Link></small>
        </div>
      </form>
  );
}