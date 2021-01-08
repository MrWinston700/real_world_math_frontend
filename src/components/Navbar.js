import React, { Component }from 'react'
import { NavLink } from 'react-router-dom';
 
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
      <div>
        <NavLink
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
 
export default Navbar;