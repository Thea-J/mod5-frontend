import React, { Component } from "react";
import API from "../../API";
import { Header, Image, Grid, List, Icon, Divider } from "semantic-ui-react";
import BusinessCard from "../cards/BusinessCard";


class OwnerShowPage extends Component {
    state = {
      first_name: "",
      last_name: "",
      profile_picture: "",
      bio: "",
      businesses: [],
      social_media: ""
    };
    
    componentDidMount() {
      API.fetchOwner(this.props.match.params.id)
      .then((ownerObj) => this.setState(ownerObj ))     
    }
 
    renderBusinessCards = () => {
      const businesses = this.state.businesses
      return (
        <div>
          { businesses.map((business) => { return <BusinessCard key={business.name} business={business} />; })}
        </div>
      )
    }

  render() {
    return (
      <div className="owner-show-page">
       <Header as='h2' > {this.state.first_name} {this.state.last_name}</Header>
       <Header as='h4' > {this.state.bio} </Header>
       <Grid celled='internally' container columns={3} centered>
      
          <Grid.Column width={5}>
          <Icon name='linkify' />
            <a href={this.state.social_media} target="_blank"  rel="noopener noreferrer">
                <Image src= {this.state.profile_picture} wrapped ui={false}  />
            </a>
          </Grid.Column>


        {/* <Grid.Column > */}
        {/* <Header as='h3' > Businesses: </Header> */}
            {/* {this.renderBusinessCards()} */}
        {/* </Grid.Column> */}
        {/* <Divider horizontal>  <Header as='h2' >Businesses</Header> </Divider> */}

        <Grid.Row container width={5}>
        {this.renderBusinessCards()}
        </Grid.Row>
        
       </Grid>


      </div>
    );
  }
}

export default OwnerShowPage;