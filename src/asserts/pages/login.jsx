import React,{useState} from 'react';
import Template from './template';
import Logo from './logo';
import { Link } from 'react-router-dom';

export default function Login() {
  
  const logo = <Logo />
  const form = <Form />

  return (
    <div>
      <Template left={logo} right={form} />
    </div>
  );
}


function Form() {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

  const handleSubmit = (evt) => {
    alert("your email is "+email + "\nyour password is " + password);
  }

  return (

      <form onSubmit={handleSubmit}>
        <div className="text-center">
          <h1>Login</h1>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          value={email} onChange={e => setEmail(e.target.value)}></input>
        </div>
  
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"
           value={password} onChange={e => setPassword(e.target.value)}></input>
        </div>
  
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
          <label className="form-check-label" for="exampleCheck1">Remember me</label>
        </div>
 
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-block btn-primary" >Login</button>
        </div>

        <div>
          <small>Dont have an account? <Link to='/Register'> Register </Link><br/>
          Forgot password? <a href="#fogotPW">Password Recovery</a></small>
        </div>
      </form>
  );
}