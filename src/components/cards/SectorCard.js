import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";

// import { Link } from "react-router-dom";

class SectorCard extends Component {
    
    renderCard = () => {
        const sectors = this.props.sectorData
        for (var key in sectors) {
            return (<>
            <Image src={sectors[key]} wrapped ui={false} />
            <Card.Content> <Card.Header> {key} </Card.Header>  </Card.Content>
            </>)
        } 
    }
    render() {
        // for (var key in sectors) {
        // key 
        // sectors[key]
        //   }
        

    return (
      <div className="sectorCard">
      <Card>
        {/* {for (var key in sectors) {
        <Image src='sectors[key]' wrapped ui={false} />
        <Card.Content> <Card.Header> {key} </Card.Header>  </Card.Content>
        }} */}
        {this.renderCard()}
      </Card>
      </div>
    );
  }
}

export default SectorCard;