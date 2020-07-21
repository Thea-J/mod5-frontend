import React, { Component } from "react";
import API from "../../API";
import { Header } from "semantic-ui-react";


class OwnerShowPage extends Component {
    state = {
        first_name: "",
        last_name: "",
        profile_picture: "",
        bio: "",
        businesses: "",
        social_media: ""
    };
    
    componentDidMount() {
      API.fetchOwner(this.props.match.params.id).then((ownerObj) =>
        this.setState(ownerObj)
      );
    }
 

  render() {
    return (
      <div className="owner-show-page">
       <Header as='h2' >Owner {this.state.first_name} ShowW Page</Header>
      </div>
    );
  }
}

export default OwnerShowPage;