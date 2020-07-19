import React, { Component } from "react";
import BusinessCard from "../cards/BusinessCard";
import { Card, Image } from "semantic-ui-react";
// import { Link } from "react-router-dom";

class SectorContainer extends Component {
    renderBusinessCard = () => {
        // return this.props.businessesArray.map(
        //     (business, index) => {
        //     if (business.sector == sectorName) 
        //     <BusinessCard key={index} business={business} />}
        // );
    }

  render() {
    const sectorName = this.props.location.state.sectorName
    const imgUrl = this.props.location.state.imgUrl
    return (
      <div className="sectorContainer">
      <h1> {sectorName} </h1>
      <Image src={imgUrl} wrapped ui={false} />
      {/* <h1> {this.props.location.sectorDetails.imgUrl} </h1> */}
      <h3> Search & filter Here</h3>
      <h3>Businesses belonging to a sector Here</h3>
      {this.renderBusinessCard()}
      </div>
    );
  }
}

export default SectorContainer;