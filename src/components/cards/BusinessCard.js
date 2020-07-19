import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";
import {Link} from "react-router-dom";


class BusinessCard extends Component {
    
    renderCard = () => {
        const business = this.props.business
        return    <>
            <Link to={`/businesses/${this.props.business.id}`}>
            <Image src={business.logo} wrapped ui={false} />
            </Link>
            <Card.Content> <Card.Header> {this.props.business.name} | Owner </Card.Header>  </Card.Content>
        </>
    }


    render() {
       
        
    return (
      <div className="sectorCard">
      <Card>
        {this.renderCard()}
      </Card>
      </div>
    );
  }
}

export default BusinessCard;