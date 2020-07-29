import React, { Component } from "react";
import SectorCard from "../cards/SectorCard";
import { Header, Grid } from "semantic-ui-react";


class HomeContainer extends Component {
    renderSectorCards = () => {
        return this.props.sectors.map(
          (sectorObj, index) => <SectorCard key={index} sectorData={sectorObj} />
        );
    }

  render() {
    return (
      <div className="homeContainer">
      <Header as='h2' >Welcome, Choose a Sector!</Header>
       <Grid container columns={3} centered>
      {this.renderSectorCards()}
      </Grid>
      </div>
    );
  }
}

export default HomeContainer;