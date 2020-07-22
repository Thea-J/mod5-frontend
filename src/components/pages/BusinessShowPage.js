import React, { Component } from "react";
import API from "../../API";
import { Header, Image, Grid, List, Icon } from "semantic-ui-react";
import {Link} from "react-router-dom";



class BusinessShowPage extends Component {
    state = {
        name: "",
        logo: "",
        bio: "",
        social_media: [],
        web_link: "",
        promotions: "",
        country:"",
        city:"",
        price_point: "",
        business_owner_id: ""
    };
    
    componentDidMount() {
      API.fetchBusiness(this.props.match.params.id).then((businessObj) =>
        this.setState(businessObj)
      );
    }
    
    renderPriceRangeSymbol = () => {
      const price = this.state.price_point
      {if (price == 1) { return <List.Content>£</List.Content>}
      else if (price == 2) { return <List.Content>££</List.Content>}
      else if (price == 3) { return <List.Content>£££</List.Content>}
      else if (price == 4) { return <List.Content>££££</List.Content>}}
    }

  render() {
    return (
      <div className="business-show-page">
       <Header as='h2'>{this.state.name}</Header>

       <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={5}>
          <Icon name='linkify' />
            <a href={this.state.web_link} target="_blank" rel="noopener noreferrer">
                <Image src= {this.state.logo} wrapped ui={false}  />
            </a>
          </Grid.Column>
          <Grid.Column width={5}>

          <List>
            <List.Item>
              <List.Content>{this.state.bio}</List.Content>
            </List.Item>
           
            <List.Item>
              <List.Icon name='address book outline' />
              <List.Content>
                <Link to={{pathname:`/business_owners/${this.state.business_owner_id}`}}>
                        By:  //owner_name
                </Link>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon name='money bill alternate outline' />
              {this.renderPriceRangeSymbol()}
              {/* <List.Content>Price Point: {this.state.price_point}</List.Content> */}
            </List.Item>

            <List.Item>
              <List.Icon name='point' />
              <List.Content>
                {this.state.country}, {this.state.city}
              </List.Content>
            </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>

        {/* <Grid.Row>
             //promo
            {this.state.promotions}
        </Grid.Row>
        <Grid.Row>
            //social media
            {this.state.social_media}
        </Grid.Row> */}
       </Grid>

    </div>
    );
  }
}

export default BusinessShowPage;