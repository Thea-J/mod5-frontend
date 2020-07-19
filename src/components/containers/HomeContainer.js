import React, { Component } from "react";
import SectorCard from "../cards/SectorCard";
import { Header } from "semantic-ui-react";


class HomeContainer extends Component {
    renderSectorCards = () => {
        return this.props.sectors.map(
            (sector, index) => <SectorCard key={index} sectorData={sector} />
        );
    }

  render() {
    return (
      <div className="homeContainer">
       <Header as='h2' >Select a Sector</Header>
      {this.renderSectorCards()}
      </div>
    );
  }
}

export default HomeContainer;