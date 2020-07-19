import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";

// import { Link } from "react-router-dom";

class SectorCard extends Component {
    render() {
        
 //Array of all the different industries
    const listOfIndustries = [ ]
            //Corresponding images
    return (
      <div className="sectorCard">
      <Card>
        <Image src='' wrapped ui={false} />
        <Card.Content> <Card.Header> {this.props.business.name} </Card.Header>  </Card.Content>
      </Card>
      </div>
    );
  }
}

export default SectorCard;