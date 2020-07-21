import React, { Component } from "react";
import './App.css';
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";

import HomeContainer from "./components/containers/HomeContainer";
import SectorContainer from "./components/containers/SectorContainer";
import SignInContainer from "./components/containers/SignInContainer";
import SignUpContainer from "./components/containers/SignUpContainer";
import BusinessShowPage from "./components/pages/BusinessShowPage";
import OwnerShowPage from "./components/pages/OwnerShowPage";

import API from "./API";

class App extends Component {
    state = {
     businessesArray: [],
     businessSectorObj: [],
     businessOwnersArray: [],
     user: null,
    }

    // handleFetch = (receivedArray, stateArray) => {
    //   this.setState({ receivedArray: [...stateArray, ...receivedArray] })
    // }

    componentDidMount() {
      if (localStorage.token) { API.validate().then(this.signIn); }
      // Handle fetch requests & auth
      API.fetchBusinessesArray()
      // .then((receivedBusinessesArray) => this.handleFetch(receivedBusinessesArray, this.state.businessesArray));
      // .then((businessesArray) => {console.log(`businessesURL returns1: ${JSON.stringify(businessesArray[1])}`)} );
      .then((businessesArray) => this.setState({ 
        businessesArray: [...this.state.businessesArray, ...businessesArray[0]],
        businessSectorObj: [...this.state.businessSectorObj, ...businessesArray[1]],
        }) 
      );

    } 

    signIn = (userObj, token) => {
      this.setState({ user: userObj });
      if (token) localStorage.token = token;
    };
  
    signOut = () => {
      this.setState({ user: null });
      localStorage.removeItem("token");
      // this.props.history.push('/sign-in')
    };

  render() {
  return (
    <>
    <ul>
    {this.state.user ? (
      <Menu>
      <Menu.Item> <Link to="/">Homepage</Link> </Menu.Item>
        {/* <Menu.Item> <Link to="/search">Search</Link> </Menu.Item> */}
        <Menu.Item> <Link to={`/business_owners/${this.state.user.id}`}>Profile</Link> </Menu.Item>
        <Menu.Item> <Link to="/edit-profile">Edit Profile</Link> </Menu.Item>
        <Menu.Item> <Link to="/add-business">Add Business</Link> </Menu.Item>
        <Menu.Item> <Link to="/edit-business">Edit Business</Link> </Menu.Item>
        <Menu.Item> <Link to="/sign-in" onClick={this.signOut}> Sign Out </Link>  </Menu.Item>
      </Menu>
    ) : (
      <Menu>
        <Menu.Item> <Link to="/">Homepage</Link> </Menu.Item>
        {/* <Menu.Item> <Link to="/search">Search</Link> </Menu.Item> */}
        <Menu.Item> <Link to="/sign-in">Sign In</Link> </Menu.Item>
        <Menu.Item> <Link to="/sign-up">Sign Up</Link> </Menu.Item>
      </Menu>
    )}
  </ul>

  <Switch>
  <Route exact path="/"> <HomeContainer businessesArray={this.state.businessesArray} sectors={this.state.businessSectorObj} /> </Route>
  <Route exact path="/sector/:sectorIdentifier"   render={(routerProps) => <SectorContainer {...routerProps} businessesArray={this.state.businessesArray} />} /> 
  <Route exact path="/businesses/:id"   render={(routerProps) => <BusinessShowPage {...routerProps}  />} /> 
  <Route exact path="/business_owners/:id"   render={(routerProps) => <OwnerShowPage {...routerProps}  />} /> 
  <Route exact path="/sign-in" render={(routerProps) => <SignInContainer {...routerProps} signIn={this.signIn} />} />
  <Route exact path="/sign-up" render={(routerProps) => <SignUpContainer {...routerProps} signIn={this.signIn} />} />

  </Switch>

  </>
  );
  }
}

export default withRouter(App);
