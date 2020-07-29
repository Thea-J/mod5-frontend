import React, { Component } from "react";
import SearchResultsContainer from "./SearchResultsContainer";
import API from "../../API";
import { Image, Form, Grid, Header, Label, Icon } from "semantic-ui-react";

class SectorContainer extends Component {

    state = {
      searchTerm: "",
      filteredBusinesses: [],
      city: "",
      price_point: "",
      businessSectorObj: [],
      imgUrl: "",
    }

    findSectorImg = () => {
    const sectorName = this.props.match.params.sectorIdentifier
    const sectorObj =this.state.businessSectorObj
    for (const key in sectorObj)
    // {console.log(sectorObj[key].sectorName)}  
   {if (sectorObj[key].hasOwnProperty(sectorName)) {
         {console.log(sectorObj[key].sectorName)}  
    }}
  //  {return sectorObj[key].hasOwnProperty(sectorName) ? this.setState({imgUrl: sectorObj[key].sectorName}) : null}
    // {if (sectorName==key) {this.setState({imgUrl: sector.sectorName})}}
    // $sectorobj[0].Retail returns img url
    //$sectorobj[0]retunrs sector name?
    // array1.forEach(element => console.log(element));

    // function getKeyByValue(object, value) {
    //   return Object.keys(object).find(key => object[key] === value);
    // }

    // function getValue(object, name) {
    //   return Object.keys(object).find(key => object[key] === name);
    // }
    
    }


    componentDidMount() {
      API.fetchBusinessesArray()
      .then((businessesArray) => this.setState({ 
        filteredBusinesses: [...this.state.filteredBusinesses, ...businessesArray[0]],
        businessSectorObj: [...this.state.businessSectorObj, ...businessesArray[1]],
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
      <Header as='h2' >{sectorName}</Header>
      {this.findSectorImg()}
      {/* <Image src={imgUrl} wrapped ui={false} /> */}
      <Form >
      <Grid centered>
        <Grid.Row width={2}>
          <Form.Field inline>
          <Label> <Icon name='search'/> Search </Label>
            <input
              type="text"
              className="search-bar"
              placeholder="Name of Business"
              onChange={this.handleSearchChange}
            ></input>
          </Form.Field>
        </Grid.Row>

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