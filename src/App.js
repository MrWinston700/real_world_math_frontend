import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/Signup'
import SignIn from './components/Signin';
import QuestionContainer from './containers/QuestionContainer'
import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };
  }

  checkLogInStatus() {
    axios.get("http://localhost:3001/logged_in", { withCredentials: true})
    .then(response => {
      if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        })
      } else if (!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        })
      }
    })
    .catch(error => {console.log("check login error", error)})
  }

  componentDidMount() {
    this.checkLogInStatus();
  }

  render() {
  return (
    <div className="App">
      <Router>
      <div>
        <Navbar />
        <Route exact path="/question" component={QuestionContainer} />
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    </Router>
    </div>
  );
  }
}

export default App;
