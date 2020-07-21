import React, { Component } from "react";
import API from "../../API";
import { Header, Image, Grid, List, Icon } from "semantic-ui-react";
import BusinessCard from "../cards/BusinessCard";


class OwnerShowPage extends Component {
    state = {
      first_name: "",
      last_name: "",
      profile_picture: "",
      bio: "",
      businesses: [],
      social_media: []
    };
    
    componentDidMount() {
      API.fetchOwner(this.props.match.params.id)
      .then((ownerObj) => this.setState(ownerObj ))
          // businesses: [...this.state.businesses, ...ownerObj.businesses]}
     
    }
 
    renderBusinessCards = () => {
      const businesses = this.state.businesses
      // console.log(`businesses array in state returns1: ${JSON.stringify(businesses)}`)
      // if (businesses !== "" )
      // for (const business in businesses) { 
      // console.log(`business object returns1: ${JSON.stringify(business)}`)
      //   return (<BusinessCard business={business} />) }}
      // {
        // businesses.map( (business, index) => {return <BusinessCard key={index} business={business} /> })
    // }
    return (
      <div>
        {
          businesses.map((business) => {
            return <BusinessCard key={business.name} business={business} />;
          })
        }
      </div>
    )
  }

  render() {
    return (
      <div className="owner-show-page">
       <Header as='h2' >Owner {this.state.first_name} {this.state.last_name}ShowW Page</Header>

       <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={5}>
          <Icon name='linkify' />
            {/* <a href={this.state.web_link} target="_blank"> */}
                <Image src= {this.state.profile_picture} wrapped ui={false}  />
            {/* </a> */}
          </Grid.Column>

          <Grid.Column width={5}>
          <List>
            <List.Item>
              <List.Content>{this.state.bio}</List.Content>
            </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
             //businesses
            {this.renderBusinessCards()}
        </Grid.Row>

        <Grid.Row>
            //social media
            {this.state.social_media}
        </Grid.Row>
       </Grid>

      </div>
    );
  }
}

export default OwnerShowPage;