import React from 'react';
import './Style.css';

function Login() {
  return (
    <div className='login'>
    <div className="login-page">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="login-button-page">Login</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
