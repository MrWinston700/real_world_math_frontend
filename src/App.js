import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/Signup'
import SignIn from './components/Signin';
import QuestionContainer from './containers/QuestionContainer'
import React, { Component } from 'react';
import Dashboard from './components/Dashboard'
import { connect } from 'react-redux';
import axios from "axios";
import { sign_in } from './actions/index'

class App extends Component {

  checkLoginStatus() {
    axios
      .get("http://localhost:3001/check_logged_in", { withCredentials: true })
      .then(response => {
        if (
          response.data.logged_in && this.props.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          console.log(response.data)
          this.props.sign_in(response.data);
          }
        })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  componentDidMount() {
    console.log("mounting works")
    this.checkLoginStatus();
  }

  render() {
  return (
    <div className="App">
      
      <Router>
      <div>
        <Navbar />
        <Route exact path="/question" component={QuestionContainer} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    </Router>
    <Dashboard loggedInStatus={this.props.loggedInStatus} user={this.props.user}/>
    </div>
  );
  }
}

const mapStateToProps = state => {
  console.log(state);
  debugger
  if (state.registration.user && state.registration.user.user !== undefined) {
    return {
      user: state.registration.user.user.email, loggedInStatus: state.registration.loggedInStatus
    }
  } else {
    return {
      user: "no user Logged in", loggedInStatus: state.registration.loggedInStatus
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sign_in: (data) => dispatch(sign_in(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
