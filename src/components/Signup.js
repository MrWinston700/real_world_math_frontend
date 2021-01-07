import React, { Component } from 'react';
import axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: ""
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
    const { email, password, password_confirmation } = this.state;

    axios
      .post(
        "http://localhost:3001/users",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("registration error", error);
      });
    event.preventDefault();
  }

  render() {
    console.log("signup");
    return (
      
      <div>
      <div className="form-popup" id="myForm">
        <form className="form-container" onSubmit={this.handleSubmit}>
          <h1>Sign up</h1>
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

          <input
            type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />

          <button type="submit" className="btn">Sign up</button>
          <button type="button" className="btn cancel" onClick={this.closeForm}>Close</button>
        </form>
      </div>
    </div>
    );
  }
}

export default SignUp;