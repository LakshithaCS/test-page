import React,{useState} from 'react';
import Template from './template';
import Logo from './logo';
import { Link } from 'react-router-dom';

export default function Login() {

  const logo = <Logo /> //logo of the page
  const form = <Form /> //login form

  //return template --> left side = logo , right side = login form 
  return (
    <div>
      <Template left={logo} right={form} /> 
    </div>
  );
}

//login form implementation
function Form() {


  /*
  this part is only for test sumbit form, it used for display all the details when clicks button.
  you can delete --> line 28 to 35 & event handling functions in form.
  */

   //states
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   //function that displayes email and password when submit
  const handleSubmit = (evt) => {
    alert("your email is "+email + "\nyour password is " + password);
  }

////////////////////////////////////////////////////////////////////////////////////////////

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