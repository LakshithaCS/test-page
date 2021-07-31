import React,{useState} from 'react';
import Template from './template';
import Logo from './logo';
import { Link } from 'react-router-dom';

export default function Register() {
  
  const logo = <Logo /> //logo of the page
  const form = <Form /> //registration form

  //return template --> left side = logo , right side = registration form 
  return (
    <div>
      <Template left={logo} right={form} />
    </div>
  );
}


function Form() {

  
  /*
  this part is only for test sumbit form, it used for display all the details when clicks button.
  you can delete --> line 28 to 47 & event handling functions in form.
  */
  //states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  //function that diplays details when submit
  const handleSubmit = (evt) => {

    //if password doesn't match 
    if(password != cpassword){
      alert("passwords doesn't match");
    }

    //else
    else{
    alert("your name is "+name + 
      "\nyour email is "+email);
      }
  }

  //////////////////////////////////////////////////////////////////////
  
  return (

      <form onSubmit={handleSubmit}>
        <div className="text-center">
          <h1>Register</h1>
        </div>
        
        <div className="mb-3">
          <label for="fullName" className="form-label">Full Name</label>
          <input type="Name" className="form-control" id="fullName"
          value={name} onChange={e => setName(e.target.value)}></input>
        </div>

        <div className="mb-3">
          <label for="Email1" className="form-label">Email</label>
          <input type="email" className="form-control" id="Email1" aria-describedby="emailHelp"
          value={email} onChange={e => setEmail(e.target.value)}></input>
        </div>
  
        <div className="mb-3">
          <label for="Password1" className="form-label">Password</label>
          <input type="password" className="form-control" id="Password1"
          value={password} onChange={e => setPassword(e.target.value)}></input>
        </div>

        <div className="mb-3">
          <label for="Password2" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="Password2"
          value={cpassword} onChange={e => setCpassword(e.target.value)}></input>
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