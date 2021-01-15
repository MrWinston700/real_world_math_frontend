import React, { Component }from 'react'
import { NavLink } from 'react-router-dom';
import { get_question } from '../actions/index'
import { connect } from 'react-redux';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}
 
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
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
        >Home</NavLink>
        <NavLink
          className = "navLinks"
          to="/"
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
  return { question: state.question }
}
const mapDispatchToProps = dispatch => {
  return {
    get_question: () => dispatch(get_question())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);