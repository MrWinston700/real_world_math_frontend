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

class App extends Component {

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
  debugger
  console.log(state);
  
  if (state.registration.user) {
    return {
      user: state.registration.user.user.email, loggedInStatus: state.registration.loggedInStatus
    }
  } else {
    return {
      user: "no user Logged in", loggedInStatus: state.registration.loggedInStatus
    }
  }
}

export default connect(mapStateToProps)(App);
