import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup'
import SignIn from './components/Signin';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };
  }
  render() {
  return (
    <div className="App">
      <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/actors" component={Home} />
      </div>
    </Router>
    <SignIn/>
    <Signup/>
    </div>
  );
  }
}

export default App;
