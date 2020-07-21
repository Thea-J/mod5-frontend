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
       <Header as='h2' >Add Business Container</Header>
       <Card centered>
          <Card.Content extra>
            <Icon name="" />
          </Card.Content>
          <Card.Content header="Enter Business details" />
        <AddBusinessForm sendNewBusinessDataToRails={this.sendNewBusinessDataToRails} loggedInUser={this.props.loggedInUser}/>
        </Card>
      </div>
    );
  }
}

export default AddBusinessContainer;