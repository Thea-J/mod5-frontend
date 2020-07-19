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
      <h3>Render the filter component here</h3>
      <h3>Render the Sector cards here</h3>
      {this.renderSectorCards()}
      </div>
    );
  }
}

export default HomeContainer;