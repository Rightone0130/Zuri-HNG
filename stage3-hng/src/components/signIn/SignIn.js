import React, { Component } from 'react';
import "./signIn.css"
import { Link } from 'react-router-dom';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log('Sign in form submitted:', this.state);
  };

  render() {
    return (
        <div class="form_container">
            <i class="uil uil-times form_close"></i>
      <div className="form login_form">
        <form onSubmit={this.handleSubmit}>
          <h2>Login</h2>
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
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
            <i className="uil uil-lock password"></i>
          </div>
          <button className="button" type="submit">
            Login Now
          </button>
        </form>
        <div className="login_signup">
          Don't have an account? <Link to={"/rightpics/Signup"} onClick={this.props.toggleForm}><a href="#" >Signup</a></Link>
        </div>
      </div>
      </div>
    );
  }
}

export default SignIn;
