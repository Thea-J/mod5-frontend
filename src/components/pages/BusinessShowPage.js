import React, { Component } from "react";
import API from "../../API";
import { Header, Image, Grid, List, Icon, Label, Divider, Segment } from "semantic-ui-react";
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
        business_owner_id: "",
        business_owner_obj: []
    };
    
    componentDidMount() {
      API.fetchBusiness(this.props.match.params.id).then((businessObj) =>
        this.setState(businessObj)
      );
      API.fetchOwner(this.state.business_owner_id)
      .then((obj) => this.setState({business_owner_obj: [...this.state.business_owner_obj, ...obj]})
    );
    }
    
    renderPriceRangeSymbol = () => {
      const price = this.state.price_point
      {if (price == 1) { return "£"}
      else if (price == 2) { return "££"}
      else if (price == 3) { return "£££"}
      else if (price == 4) { return "££££" }}
    }

    owner_name = () => { 
      const ownerObj = this.state.business_owner_obj
      for (const owner of ownerObj)
      {if (this.state.business_owner_id == owner.id) {return <p> By: {owner.first_name} </p>}}
    }


  render() {
    return (
      <div className="business-show-page">

<Segment >
    <Grid columns={2} relaxed='very' stackable>
    
    <Grid.Column>
      {/* <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/> */}
     
         <a href={this.state.web_link} target="_blank" rel="noopener noreferrer">
              <Icon name='linkify' />
              <Image src= {this.state.logo} wrapped ui={false}  />
            </a>
      </Grid.Column>


      <Grid.Column verticalAlign='left'>
       <br/>
       <br/>
       <br/>
       {/* <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/> */}


          <Header as='h3' > {this.state.bio} </Header>

            <Header as='h3'> 
              <Icon name='money bill alternate outline' />
              {this.renderPriceRangeSymbol()}
              </Header>
           
            <Header as='h4' >
              <Icon name='point' />
                {this.state.country}, {this.state.city}
              </Header>
            
      </Grid.Column>
    </Grid>

    <Divider vertical>  
          <Header as='h2' >{this.state.name} </Header>
          <Link to={{pathname:`/business_owners/${this.state.business_owner_id}`}}>
            <Label as='a' color='blue' > {this.owner_name()} </Label>                
          </Link>
        </Divider>

  </Segment>

    </div>
    );
  }
}

export default BusinessShowPage;