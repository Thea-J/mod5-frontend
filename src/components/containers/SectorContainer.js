import React, { Component } from "react";
import BusinessCard from "../cards/BusinessCard";
import { Image, Select, Grid, Search} from "semantic-ui-react";
// import { Link } from "react-router-dom";

class SectorContainer extends Component {

    // state = {
    //     imgUrl: "",
    //     sectorName: "",
    // }

    // componentDidMount() {
    //     const sectorName = this.props.match.params.sectorIdentifier
    //     fetch()
    // }
    
 renderBusinessCard = () => {
        const sectorName = this.props.match.params.sectorIdentifier
    return this.props.businessesArray.map(
        (business, index) => {
       return business.sector === sectorName ?
        <BusinessCard key={index} business={business} /> : null
    })
 }

  render() {
        const sectorName = this.props.match.params.sectorIdentifier
    // const sectorName = this.state.sectorName
    // const imgUrl = this.props.location.state.imgUrl
    const priceOptions = [
        {key: 'af', value: 'af', text: ""},
        {key: 'af', value: 'af', text: "£"},
        {key: 'af', value: 'af', text: "££" },
        {key: 'af', value: 'af', text: "£££" },
        {key: 'af', value: 'af', text: "££££" }
    ]

    const cityOptions = [
        {key: 'af', value: 'ldn', text: "London"},
        {key: 'af', value: 'exe', text: "Exeter"},
        {key: 'af', value: 'bris', text: "Bristol" },
        {key: 'af', value: 'birm', text: "Birmingham" },
        {key: 'af', value: 'lei', text: "Leicester" }
    ]

    return (
      <div className="sectorContainer">
      <h1> {sectorName} </h1>
      {/* <Image src={imgUrl} wrapped ui={false} /> */}
      <h3> Search & filter Here</h3>
      <Grid>
        <Grid.Column width={8}>
          <Search/>
        </Grid.Column>
        </Grid>
      <Select placeholder='Price Point' options={priceOptions} />
      <Select placeholder='City' options={cityOptions} />
      <h3>Businesses belonging to a sector Here</h3>
      {this.renderBusinessCard()}
      </div>
    );
  }
}

export default SectorContainer;