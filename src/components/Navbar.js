import React, { Component }from 'react'
import { NavLink } from 'react-router-dom';
import { get_question } from '../actions/index'
import { connect } from 'react-redux';

class Navbar extends Component {
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
    get_question: () => dispatch(get_question())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);