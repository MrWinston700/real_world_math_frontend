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
  get(){
    this.props.get_question()
  }
  render() {
    return (
      <div>
        <NavLink
          id = "my_get"
          onClick={() => this.props.get_question()}
          to="/question"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Get a question</NavLink>
        <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={link}
          /* add prop for activeStyle */
          activeStyle={{
            background: 'darkblue'
          }}
        >Home</NavLink>
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >About</NavLink>
        <NavLink
          to="/signin"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Login</NavLink>
        <NavLink
          to="/signup"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Sign Up!</NavLink>
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