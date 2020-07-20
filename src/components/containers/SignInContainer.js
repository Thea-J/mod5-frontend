import React, { Component } from "react";
import { Card, Icon} from "semantic-ui-react";
import SignInForm from "../pages/SignInForm";


class SignInContainer extends Component {

  sendSignInDataToRails = (state) => {
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(state)
    };

    return fetch("http://localhost:3000/api/v1/sign-in", configObj)
      .then((resp) => resp.json())
      .then((obj) => {
          this.props.signIn(obj.owner, obj.token);
        //   this.props.history.push(`/owners/${obj.business_owner.id}`);
        }
      )
    };

  render() {
    return (
      <div className="sign-in-container">
        <Card centered>
          <Card.Content extra>
            <Icon name="sign-in" />
          </Card.Content>
          <Card.Content header="Enter Your log-in details" />
        <SignInForm sendSignInDataToRails={this.sendSignInDataToRails}/>
        </Card>
      </div>
    );
  }
}

export default SignInContainer;