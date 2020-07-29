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
    };
    
    addBusinessForm = () => {
        return (
          <Form className="add-business-form" onSubmit={this.handleSubmit}>
            <Form.Field required>

            <Form.Input
                onChange={this.handleInputChange}
                type="text"
                placeholder="Business Name"
                label="Business Name"
                name="name"
              />

              <Form.Input
                onChange={this.uploadImg}
                type="file"
                label="Logo"
                name="file"
              />

              <Form.Input
                onChange={this.handleInputChange}
                type="text"
                placeholder="Website URL"
                label="Website"
                name="web_link"
              />

          <Form.Group widths='equal'> 
            <Form.Field label='Sector' control='select' name="sector" onChange={this.handleInputChange}>
                <option value=''>Choose a Sector</option>
                <option value='Retail'>Retail</option>
                <option value='Hospitality'>Hospitality</option>
                <option value='Food & Beverage'>Food & Beverage</option>
                <option value='I.T.'>I.T.</option>
                <option value='Beauty'>Beauty</option>
                <option value='Hair'>Hair</option>
                <option value='Wellness'>Wellness</option>
                <option value='Art'>Art</option>
            </Form.Field>

            <Form.Field label='Price Range' control='select' name="price_point" onChange={this.handleInputChange}>
                <option value='0'></option>
                <option value='1'>£0 - £250</option>
                <option value='2'>£251 - £500</option>
                <option value='3'>£551 - £700</option>
                <option value='4'>£701+</option>
            </Form.Field>
          </Form.Group>


          <Form.Group widths='equal'>  
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
          </Form.Group>

            <Form.TextArea
                onChange={this.handleInputChange}
                type="text"
                placeholder="Tell us more about your business..."
                label="About"
                name="bio"
              />

              <Form.Input
                onChange={this.handleInputChange}
                type="text"
                placeholder="Promotions"
                label="Promotions"
                name="promotions"
              />
              <Button content="Add Business" value="Add-Business" />
            </Form.Field>
          </Form>
        );
    };


    handleInputChange = (event) => { 
    //   console.log(event.target.name)
        this.setState({ [event.target.name]: event.target.value, business_owner_id: this.props.loggedInUser.id  }); 
    };

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
      .then((obj) => this.setState({ logo: obj.secure_url}))
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.sendNewBusinessDataToRails(this.state);
    };

render() {
    return (
      <div className="sign-up-form">
      {/* {console.log(this.state.price_point)} */}
      {this.addBusinessForm()}
      </div>
    );
  }
}

export default AddBusinessForm;