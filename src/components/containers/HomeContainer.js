import React, { Component } from "react";
import SectorCard from "../cards/SectorCard";
// import { Link } from "react-router-dom";

class HomeContainer extends Component {
    renderSectorCards = () => {
        return this.props.sectors.map(
            (sector, index) => <SectorCard key={index} sectorData={sector} />
        );
    }

  render() {
    return (
      <div className="homeContainer">
      <h3>Select a Sector</h3>
      {this.renderSectorCards()}
      </div>
    );
  }
}

export default HomeContainer;