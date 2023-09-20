import React, { Component } from 'react';
import SignUp from '../signUp/SignUp';
import SignIn from '../signIn/SignIn';

class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignUp: false,
    };
  }

  toggleForm = () => {
    this.setState((prevState) => ({
      isSignUp: !prevState.isSignUp,
    }));
  };

  render() {
    return (
      <div className="home">
        <div className="form_container">
          {this.state.isSignUp ? (
            <SignUp toggleForm={this.toggleForm} />
          ) : (
            <SignIn toggleForm={this.toggleForm} />
          )}
        </div>
      </div>
    );
  }
}

export default AuthContainer;
