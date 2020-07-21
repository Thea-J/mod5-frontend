import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";


class SignInForm extends Component {
    state = {
        first_name: "",
        last_name: "",
        username: "",
        password_digest: "",
        profile_picture: "",
        bio: "",
        // social_media: []
    };
    
    signUpForm = () => {
        return (
          <Form className="sign-up-form" onSubmit={this.handleSubmit}>
            <Form.Field required>
            <Form.Input
                onChange={this.handleInputChange}
                type="text"
                placeholder="First Name"
                label="First Name"
                name="first_name"
              />

            <Form.Input
                onChange={this.handleInputChange}
                type="text"
                placeholder="Last Name"
                label="Last Name"
                name="last_name"
              />

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
                name="password_digest"
              />

            <Form.Input
                onChange={this.handleInputChange}
                type="text"
                placeholder="Profile Picture"
                label="Profile Picture"
                name="profile_picture"
              />

            <Form.TextArea
                onChange={this.handleInputChange}
                type="text"
                placeholder="Tell us more about you.."
                label="About"
                name="bio"
              />

              <Button content="Sign-up" value="Sign-up" />
            </Form.Field>
          </Form>
        );
    };

    handleInputChange = (event) => { this.setState({ [event.target.name]: event.target.value }); };
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.sendSignUpDataToRails(this.state);
    };

render() {
    return (
      <div className="sign-up-form">
      {this.signUpForm()}
      </div>
    );
  }
}

export default SignInForm;