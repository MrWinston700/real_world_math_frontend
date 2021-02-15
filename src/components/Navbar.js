import React, { Component }from 'react'
import { NavLink } from 'react-router-dom';
import { get_question } from '../actions/index'
import { log_out } from '../actions/index'
import { connect } from 'react-redux';
import axios from "axios";
import swal from 'sweetalert';

class Navbar extends Component {
  
  handleLogoutClick() {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then(response => {
        if (response.data.logged_out === true) {
          swal("you've been logged out")
          this.props.log_out()
        }
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }

  render() {
    return (
      <div id="head">
        <nav>
        <ul>
        <NavLink
          className = "navLinks"
          onClick={() => this.props.get_question()}
          to="/question"
          exact
        >Get a question</NavLink>

        <NavLink
          className = "navLinks"
          to="/"
          exact
        >Home</NavLink>

        <NavLink
          className = "navLinks"
          to="/about"
          exact
        >About</NavLink>

        <NavLink
          className = "navLinks"
          to="/signin"
          exact
        >Login</NavLink>
          
        <NavLink
          className = "navLinks"
          to="/signup"
          exact
        >Sign Up!</NavLink>

        <NavLink
          className = "navLinks"
          to="/logout"
          exact
          onClick={() => this.handleLogoutClick()}
        >Logout</NavLink>
        </ul>
        </nav>
      </div>
    )
  }
}
 

const mapStateToProps = state => {
  if (state.registration.user) {
    return {
      user: state.registration.user
    }
  } else {
    return state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    log_out: () => dispatch(log_out()),
    get_question: () => dispatch(get_question())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);