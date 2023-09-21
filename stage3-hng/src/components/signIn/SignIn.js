import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'; 
import { useNavigate } from 'react-router-dom';


function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Sign in successful');
      const j = "/"
      
      const from = location.state?.from || '/rightpics/Dashboard';
      // window.location.href = from;
      navigate(from); 
    } catch (error) {
      setError(error.message);
      console.error('Error signing in:', error.message);
    }
  };

  return (
    <div className="form_container">
      <i className="uil uil-times form_close"></i>
      <div className="form login_form">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          {error ? <div style={{ color: 'red', fontSize: 'small' }} className="errorMessage">Username or Password incorrect</div> : null}

          <div className="input_box">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleInputChange}
              required
            />
            <i className="uil uil-envelope-alt email"></i>
          </div>
          <div className="input_box">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleInputChange}
              required
            />
            <i className="uil uil-lock password"></i>
          </div>
          <button className="button" type="submit">
            Login Now
          </button>
        </form>
        <div className="login_signup">
          Don't have an account?{' '}
          <Link to="/rightpics/Signup">
            <a href="#">Signup</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
