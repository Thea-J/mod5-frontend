import React, { Component } from "react";
import './App.css';
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import HomeContainer from "./components/containers/HomeContainer";
import API from "./API";

class App extends Component {
    state = {
     businessesArray: [],
     businessOwnersArray: [],
     user: null,
    }

    handleFetch = (receivedArray, stateArray) => {
      this.setState({ receivedArray: [...stateArray, ...receivedArray] })
    }

    componentDidMount() {
      // Handle fetch requests & auth
      API.fetchBusinessesArray()
      // .then((receivedBusinessesArray) => this.handleFetch(receivedBusinessesArray, this.state.businessesArray));
      // .then((businessesArray) => {console.log(`businessesURL returns: ${businessesArray}`)} );
      .then((businessesArray) => this.setState({ businessesArray: [...this.state.businessesArray, ...businessesArray] }) );
    } 

    //Invoked in signInPage.js line 44
    signIn = (userObj, token) => {
      this.setState({ user: userObj });
      if (token) localStorage.token = token;
    };
  
    signOut = () => {
      this.setState({ user: null });
      localStorage.removeItem("token");
      // this.props.history.push('/auth/sign-in')
    };

  render() {
  return (
    <>
    <ul>
    {/* {this.state.user ? ( */}
      <Menu>
      <Menu.Item> <Link to="/">Homepage</Link> </Menu.Item>
        <Menu.Item> <Link to="/search">Search</Link> </Menu.Item>
        {/* <Menu.Item> <Link to={`/business_owners/${this.state.user.id}`}>Profile</Link> </Menu.Item> */}
        <Menu.Item> <Link to="/edit-profile">Edit Profile</Link> </Menu.Item>
        <Menu.Item> <Link to="/add-business">Add Business</Link> </Menu.Item>
        <Menu.Item> <Link to="/edit-business">Edit Business</Link> </Menu.Item>
        <Menu.Item> <Link to="/sign-in" onClick={this.signOut}> Sign Out </Link>  </Menu.Item>
      </Menu>
    {/* ) : ( */}
      <Menu>
        <Menu.Item> <Link to="/">Homepage</Link> </Menu.Item>
        <Menu.Item> <Link to="/search">Search</Link> </Menu.Item>
        <Menu.Item> <Link to="/sign-in">Sign In</Link> </Menu.Item>
        <Menu.Item> <Link to="/sign-up">Sign Up</Link> </Menu.Item>
      </Menu>
    {/* )} */}
  </ul>

  <Switch>
  <Route exact path="/">
    <HomeContainer businessesArray={this.state.businessesArray} />
  </Route>
  </Switch>

  </>
  );
  }
}

export default withRouter(App);
