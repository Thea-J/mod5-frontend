import React, { Component } from "react";
import { Form, Button, Segment, Label } from "semantic-ui-react";


class SignUpForm extends Component {
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
          <Segment > 
          <Form className="sign-up-form" onSubmit={this.handleSubmit} >
            <Form.Field required>
            <Form.Group widths='equal'>
            <Label as='a' color='teal' > First Name </Label>
            <Form.Input
                onChange={this.handleInputChange}
                type="text"
                placeholder="First Name"
                name="first_name"
              />

<Label as='a' color='teal' > Last Name </Label>
            <Form.Input
                onChange={this.handleInputChange}
                type="text"
                placeholder="Last Name"
                name="last_name"
              />
            </Form.Group>

            <Label as='a' color='black' > Profile Picture </Label>
          <Form.Input
                onChange={this.uploadImg}
                type="file"
                placeholder="Img  upload practice"
                name="file"
              />

            <Form.Group widths='equal'> 
<Label as='a' color='teal' > Username </Label>
              <Form.Input
                onChange={this.handleInputChange}
                type="text"
                placeholder="Username"
                name="username"
              />

<Label as='a' color='teal' > Password </Label>
              <Form.Input
                onChange={this.handleInputChange}
                type="password"
                placeholder="Password"
                name="password_digest"
              />
              </Form.Group>
            {/* <Form.Input
                onChange={this.handleInputChange}
                type="text"
                placeholder="Profile Picture"
                label="Profile Picture"
                name="profile_picture"
              /> */}


            <Label as='a' color='black' > About </Label>
            <Form.TextArea
                onChange={this.handleInputChange}
                type="text"
                placeholder="Tell us more about you.."
                name="bio"
              />

              <Button content="Sign-up" value="Sign-up" color='teal' />
            </Form.Field>
          </Form>
          </Segment>
        );
    };

    handleInputChange = (event) => { this.setState({ [event.target.name]: event.target.value }); };
    
    uploadImg = (event) => {
      const files = event.target.files
      const data = new FormData()
      data.append("file", files[0])
      data.append("upload_preset", "mod5frontend")
      fetch(
        "https://api.cloudinary.com/v1_1/thea-j/image/upload", 
        {
          method: "POST",
          body: data
        }
      )
      .then((resp) => resp.json())
      .then((obj) => this.setState({ profile_picture: obj.secure_url}))
    }

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

export default SignUpForm;