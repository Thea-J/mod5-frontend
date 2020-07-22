import React, { Component } from "react";
import BusinessCard from "../cards/BusinessCard";
import { Grid} from "semantic-ui-react";

 class SearchResultsContainer extends Component {

  renderBusinessCard = () => {
    return this.props.businesses.map(
        (business, index) => {
            {if (this.props.city) {
                  return business.sector === this.props.sectorName && business.city === this.props.city? <BusinessCard key={index} business={business} /> : null 
                }
            else if (this.props.price) { 
                  return business.sector === this.props.sectorName && business.price_point === this.props.price? <BusinessCard key={index} business={business} /> : null 
               }
            else{ return business.sector === this.props.sectorName ? <BusinessCard key={index} business={business} /> : null }}}
        // return business.sector === this.props.sectorName ? <BusinessCard key={index} business={business} /> : null }
    ) }



  render() {
    return (
      <div className="search-results-container">
        <Grid container columns={3}>
          {this.renderBusinessCard()}
        </Grid>
      </div>
    );
  }
}

export default SearchResultsContainer;