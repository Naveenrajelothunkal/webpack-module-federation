import React, { useState } from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import "../css/styles.css";

const Login = ({userLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }


  return (
    <div className="wrapper">
    <div className="container">
     <div className="logo">User Login</div>
        <div className="login-item">
        <div className="form form-login">
        <div className="form-field">
          <label className="user" htmlFor="login-username"><span className="hidden">Username</span></label>
          <input id="login-username" className="form-input" autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        </div>
    
        <div className="form-field">
          <label className="lock" htmlFor="login-password"><span className="hidden">Password</span></label>
          <input id="login-password" autoFocus
           value={password}
           onChange={e => setPassword(e.target.value)}
           type="password" className="form-input" placeholder="Password" required />
        </div>

        <div className="form-field">
          <Link to="/app1/dashboard"><button type="submit" onClick={() => userLogin(email)} disabled={!validateForm()} >Log in</button></Link>
        </div>
      </div>
    </div>
</div>
</div>
  );
}
Login.propTypes = {
  userLogin: PropTypes.func.isRequired
}

export default Login;