import React, { Component } from 'react';
import './signUp.css'
import {auth} from '../../firebase.js'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { Link } from 'react-router-dom';

class SignUp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        confirmPassword: '',
        error: null,
      };
    }
  
    handleInputChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };
    
  
     handleSubmit = async (e) => {
      e.preventDefault();
  
      const { email, password, confirmPassword } = this.state;
  
      if (password !== confirmPassword) {
        this.setState({ error: 'Passwords do not match' });
        return;
      }
  
      try {
        // Create a user using Firebase Authentication
        await createUserWithEmailAndPassword(auth, email, password);
        // Redirect or show a success message here
        console.log('User signed up successfully');
      } catch (error) {
        // Handle signup errors
        this.setState({ error: error.message });
        console.error('Signup error:', error);
      }
    };
    
  
  

  render() {
    
    return (
        <div class="form_container">
      <div className="form signup_form">
        <form onSubmit={this.handleSubmit}>
          <h2>Signup</h2>
          {this.state.error && <div style={{ color: 'red', fontSize: 'small' }}  className="error">{this.state.error}</div>}
          <div className="input_box">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
            <i className="uil uil-envelope-alt email"></i>
          </div>
          <div className="input_box">
            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
            <i className="uil uil-lock password"></i>
          </div>
          <div className="input_box">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={this.state.confirmPassword}
              onChange={this.handleInputChange}
              required
            />
            <i className="uil uil-lock password"></i>
          </div>
          <button className="button" type="submit">
            Signup Now
          </button>
        </form>
        
        <div className="login_signup">
          Already have an account? <Link to={"/rightpics/SignIn"}><a href="#" onClick={this.props.toggleForm}>Login</a></Link>
        </div>
      </div>
      </div>
    );
  }
}

export default SignUp;
