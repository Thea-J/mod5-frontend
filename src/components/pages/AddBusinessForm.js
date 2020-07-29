import React, { Component } from "react";
import { Form, Button, Segment, Label } from "semantic-ui-react";


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
          <Segment > 
          <Form className="add-business-form" onSubmit={this.handleSubmit}>
            <Form.Field required>
            
            <Label as='a' color='teal' > Business Name </Label>
            <Form.Input
                onChange={this.handleInputChange}
                type="text"
                placeholder="Business Name"
                name="name"
              />

            <Label as='a' color='teal' > Logo </Label>
              <Form.Input
                onChange={this.uploadImg}
                type="file"
                name="file"
              />

            <Label as='a' color='teal' > Website </Label>
              <Form.Input
                onChange={this.handleInputChange}
                type="text"
                placeholder="Website URL"
                name="web_link"
              />

          <Form.Group widths='equal'> 

          <Label as='a' color='black' > Sector </Label>
            <Form.Field control='select' name="sector" onChange={this.handleInputChange}>
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

          <Label as='a' color='black' > Price Range </Label>
            <Form.Field control='select' name="price_point" onChange={this.handleInputChange}>
                <option value='0'>Choose a Price Range</option>
                <option value='1'>£0 - £250</option>
                <option value='2'>£251 - £500</option>
                <option value='3'>£551 - £700</option>
                <option value='4'>£701+</option>
            </Form.Field>
          </Form.Group>


          <Form.Group widths='equal'> 
          <Label as='a' color='black' > Country </Label>
            <Form.Input
                onChange={this.handleInputChange}
                type="text"
                placeholder="Country"
                name="country"
              />

          <Label as='a' color='black' > City </Label>
            <Form.Input
                onChange={this.handleInputChange}
                type="text"
                placeholder="City"
                name="city"
              />
          </Form.Group>

          <Label as='a' color='teal' > About </Label>
            <Form.TextArea
                onChange={this.handleInputChange}
                type="text"
                placeholder="Tell us more about your business..."
                name="bio"
              />

          <Label as='a' color='teal' > Promotions </Label>
              <Form.Input
                onChange={this.handleInputChange}
                type="text"
                placeholder="Promotions"
                name="promotions"
              />
              <Button content="Add Business" value="Add-Business" color='blue' />
            </Form.Field>
          </Form>
          </Segment>
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