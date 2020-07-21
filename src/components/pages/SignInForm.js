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
                onChange={this.handleInputChange}
                type="text"
                placeholder="Username"
                label="Username"
                name="username"
              />
              <Form.Input
                onChange={this.handleInputChange}
                type="password"
                placeholder="Password"
                label="Password"
                name="password"
              />
              <Button content="Sign-in" value="Sign-in" />
            </Form.Field>
          </Form>
        );
    };

    handleInputChange = (event) => { this.setState({ [event.target.name]: event.target.value }); };
    
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