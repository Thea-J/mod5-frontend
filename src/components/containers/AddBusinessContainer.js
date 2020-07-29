import React, { Component } from "react";
import { Header, Card, Icon } from "semantic-ui-react";
import AddBusinessForm from "../pages/AddBusinessForm";


class AddBusinessContainer extends Component {
    
    sendNewBusinessDataToRails = (state) => {
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(state)
    };
  
    return fetch("http://localhost:3000/api/v1/businesses", configObj)
    .then((resp) => resp.json())
    .then((newBusinessObj) => { this.props.history.push(`/businesses/${newBusinessObj.id}`);})
  };

  render() {
    return (
      <div className="add-business-container">
       <Header as='h2' >   <Icon name="signup" /> Add a Business </Header>
       {/* <Card centered>
          <Card.Content extra>
          </Card.Content>
          <Card.Content header="Enter Business details" />
        </Card> */}
        <AddBusinessForm sendNewBusinessDataToRails={this.sendNewBusinessDataToRails} loggedInUser={this.props.loggedInUser}/>
      </div>
    );
  }
}

export default AddBusinessContainer;