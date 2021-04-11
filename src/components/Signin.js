import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import { sign_in } from '../actions/index'
import swal from 'sweetalert';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
   
  componentDidMount() {
    this.openForm()
  }

  closeForm() {
    document.getElementById("myForm").style.display = "none";
    console.log("inside close form")
  }

  openForm() {
    document.getElementById("myForm").style.display = "block";
    console.log("hitting open form")
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;

    axios
      .post(
        "http://localhost:3001/session",
        {
          user: {
            email: email,
            password: password
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.logged_in) {
          console.log(response.data);
          this.props.sign_in(response.data);
          this.handlesuccess()
          swal("Log in successful", "...Glad you're back!");

        } else {
          swal("Log in Failed", "email or password is incorrect");
        }
        
      })
      .catch(error => {
        console.log("login error", error);
      });
    
  }

  handlesuccess () {  
    swal("Log in successful", "...Glad you're back!");
    setInterval(function() {
      window.location.replace("http://localhost:3000");
      }, 1000);
  }

  render() {
    return (
      <div>
        <div className="form-popup" id="myForm">
          <form className="form-container" onSubmit={this.handleSubmit}>
            <h1>Login</h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />

            <button type="submit" className="btn">Login</button>
            <button type="button" className="btn cancel" onClick={this.closeForm}>Close</button>
          </form>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  // the if statement is a temporary fix for not recieving a user yet.
  console.log(state);
  if (state.registration[0] !== undefined) {

  
    return {
      user: state.registration[0].user,
      loading: state.loading
    }
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    sign_in: (data) => dispatch(sign_in(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)