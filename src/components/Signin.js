import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import { sign_in } from '../actions/index'

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
          this.props.sign_in(response.data);
        }
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
    console.log("signin");
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
  return {
    user: state.registration[0].user,
    loading: state.loading
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    sign_in: () => dispatch(sign_in())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)