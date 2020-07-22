import React, { Component } from "react";
import SearchResultsContainer from "./SearchResultsContainer";
import API from "../../API";
import { Image, Form, Grid, Header } from "semantic-ui-react";

class SectorContainer extends Component {

    state = {
      searchTerm: "",
      filteredBusinesses: [],
      city: "",
      price_point: "",
    //     imgUrl: "",
    }

    componentDidMount() {
      API.fetchBusinessesArray()
      .then((businessesArray) => this.setState({ 
        filteredBusinesses: [...this.state.filteredBusinesses, ...businessesArray[0]],
      }) 
      );
    }
    
    updateSearchTerm = (event) => {
      this.setState({ searchTerm: event.target.value });
    };

    filterBusinessByName = () => {
      return this.state.filteredBusinesses.filter((business) =>
      business.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      );
    };

    handleSearchChange = (event) => {
      this.updateSearchTerm(event);
    };

    handleInputChange = (event) => { 
          this.setState({ [event.target.name]: event.target.value }, () => console.log(this.state.price_point)); 
      };

  render() {
    const sectorName = this.props.match.params.sectorIdentifier
    // const imgUrl = this.props.location.state.imgUrl

    return (
      <div className="sectorContainer">
      <h1> {sectorName} </h1>
      {/* <Image src={imgUrl} wrapped ui={false} /> */}
      <Header as='h2' >Search & filter Here</Header>
      <Form>
      <Grid>
        <Grid.Column width={3}>
          <Form.Field inline >
            <input
              type="text"
              className="search-bar"
              placeholder="Name of Business"
              onChange={this.handleSearchChange}
            ></input>
          </Form.Field>
        </Grid.Column>

        <Grid.Column width={2}>              
        <Form.Field label='Price Range' control='select' name="price_point" onChange={this.handleInputChange}>
                <option value='0'></option>
                <option value='1'>£</option>
                <option value='2'>££</option>
                <option value='3'>£££</option>
                <option value='4'>££££</option>
            </Form.Field>
            </Grid.Column>

        <Grid.Column width={2}> 
        <Form.Field label='City' control='select' name="city" onChange={this.handleInputChange}>
                <option value='0'></option>
                <option value='London'>London</option>
                <option value='Exeter'>Exeter</option>
                <option value='Bristol'>Bristol</option>
                <option value='Birmingham'>Birmingham</option>
                <option value='Leicester'>Leicester</option>
            </Form.Field>
        </Grid.Column>
        </Grid>
        </Form>
        <br></br>
      <SearchResultsContainer sectorName = {this.props.match.params.sectorIdentifier} businessesArray={this.state.filteredBusinesses} businesses={this.filterBusinessByName()} city={this.state.city} price={this.state.price_point} />
      </div>
    );
  }
}

export default SectorContainer;