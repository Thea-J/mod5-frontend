import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";


class AddBusinessForm extends Component {
    state = {
        name: "",
        logo: "",
        bio: "",
        sector: "",
        web_link: "",
        promotions: "",
        country: "",
        city: "",
        price_point: "",
        // business_owner_id: this.props.loggedInUser.id
        business_owner_id: 1
    };
    
    addBusinessForm = () => {
        return (
          <Form className="sign-up-form" onSubmit={this.handleSubmit}>
            <Form.Field required>
            <Form.Input
                onChange={this.handleInputChange}
                type="text"
                placeholder="Business Name"
                label="Business Name"
                name="name"
              />

            <Form.Input
                onChange={this.handleInputChange}
                type="text"
                placeholder="Logo URL"
                label="Logo"
                name="logo"
              />

              <Form.Input
                onChange={this.handleInputChange}
                type="text"
                placeholder="Website URL"
                label="Website"
                name="web_link"
              />
              <Form.Input
                onChange={this.handleInputChange}
                type="text"
                placeholder="Promotions"
                label="Promotions"
                name="promotions"
              />

            <Form.Input
                onChange={this.handleInputChange}
                type="text"
                placeholder="Country"
                label="Country"
                name="country"
              />

            <Form.Input
                onChange={this.handleInputChange}
                type="text"
                placeholder="City"
                label="City"
                name="city"
              />

            <Form.Input
                onChange={this.handleInputChange}
                type="text"
                placeholder="Price Range"
                label="Price Range"
                name="price_point"
              />

            <Form.TextArea
                onChange={this.handleInputChange}
                type="text"
                placeholder="Tell us more about you.."
                label="About"
                name="bio"
              />

              <Button content="Add Business" value="Add-Business" />
            </Form.Field>
          </Form>
        );
    };

    handleInputChange = (event) => { this.setState({ [event.target.name]: event.target.value }); };
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.sendNewBusinessDataToRails(this.state);
    };

render() {
    return (
      <div className="sign-up-form">
      {this.addBusinessForm()}
      </div>
    );
  }
}

export default AddBusinessForm;