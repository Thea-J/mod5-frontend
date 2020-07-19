import React, { Component } from "react";
// import { Card, Image } from "semantic-ui-react";
// import {Link} from "react-router-dom";


class BusinessCard extends Component {
    
    // renderCard = () => {
    //     const sectors = this.props.sectorData
    //     for (var key in sectors) {
    //         return (<>
    //         <Link to={`/businesses/${key}`}>
    //         <Image src={sectors[key]} wrapped ui={false} />
    //         <Card.Content> <Card.Header> {key} </Card.Header>  </Card.Content>
    //         </Link>
    //         </>)
    //     } 
    // }


    render() {
       
        
    return (
      <div className="sectorCard">
      <h3> Business Card component</h3>
      {/* <Card>
        {this.renderCard()}
      </Card> */}
      </div>
    );
  }
}

export default BusinessCard;