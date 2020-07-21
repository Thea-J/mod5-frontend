import React, { Component } from "react";
import { Header, Card, Icon } from "semantic-ui-react";
import SignUpForm from "../pages/SignUpForm";


class SignUpContainer extends Component {
    
    sendSignInDataToRails = (state) => {
        // let configObj = {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Accept: "application/json",
        //   },
        //   body: JSON.stringify(state)
        // };
    
        // return fetch("http://localhost:3000/api/v1/sign-in", configObj)
        //   .then((resp) => resp.json())
        //   .then((obj) => {
        //       this.props.signIn(obj.owner, obj.token);
        //       this.props.history.push(`/business_owners/${obj.owner.id}`);
        //     }
        //   )
    };

  render() {
    return (
      <div className="sign-up-container">
       <Header as='h2' >Sign Up Container</Header>
       <Card centered>
          <Card.Content extra>
            <Icon name="" />
          </Card.Content>
          <Card.Content header="Enter Your details" />
        <SignUpForm sendSignUpDataToRails={this.sendSignUpDataToRails}/>
        </Card>
      </div>
    );
  }
}

export default SignUpContainer;