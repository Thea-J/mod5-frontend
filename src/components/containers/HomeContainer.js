import React, { Component } from "react";
import SectorCard from "../cards/SectorCard";
import { Header, Grid } from "semantic-ui-react";


class HomeContainer extends Component {
    renderSectorCards = () => {
        return this.props.sectors.map(
            (sector, index) => <SectorCard key={index} sectorData={sector} />
        );
    }

  render() {
    return (
      <div className="homeContainer">
      <Header as='h2' >Welcome, Select a Sector!</Header>
       <Grid container columns={3} centered>
      {this.renderSectorCards()}
      </Grid>
      </div>
    );
  }
}

export default HomeContainer;