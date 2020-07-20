import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";


class SignInForm extends Component {
    state = {
        username: "",
        password: "",
    };
    
    signInForm = () => {
        return (
          <Form className="sign-in-form" onSubmit={this.handleSubmit}>
            <Form.Field required>
              <Form.Input
                onChange={this.handleUsernameChange}
                type="text"
                placeholder="Username"
                label="Username"
              />
              <Form.Input
                onChange={this.handlePasswordChange}
                type="password"
                placeholder="Password"
                label="Password"
              />
              <Button content="Sign-in" value="Sign-in" />
            </Form.Field>
          </Form>
        );
    };

    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value });
    };
    
    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.sendSignInDataToRails(this.state);
    };
      
  render() {
    return (
      <div className="sign-in-form">
      {this.signInForm()}
      </div>
    );
  }
}

export default SignInForm;