import React, { Component } from "react";
import BusinessCard from "../cards/BusinessCard";
import { Card, Image } from "semantic-ui-react";
// import { Link } from "react-router-dom";

class SectorContainer extends Component {
    renderBusinessCard = () => {
        // return this.props.sectors.map(
        //     (sector, index) => <BusinessCard key={index} sectorData={sector} />
        // );
    }

  render() {
    return (
      <div className="sectorContainer">
      <h1> {this.props.location.state.sectorName} </h1>
      <Image src={this.props.location.state.imgUrl} wrapped ui={false} />
      {/* <h1> {this.props.location.sectorDetails.imgUrl} </h1> */}
      <h3> Search & filter Here</h3>
      <h3>Businesses belonging to a sector Here</h3>
      {this.renderBusinessCard()}
      </div>
    );
  }
}

export default SectorContainer;