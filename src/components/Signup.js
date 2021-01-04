import React, { Component } from 'react';

class SignUp extends Component {

  state = {
    userName: '',
    userPassword: ''
  }

  handleOnChange(event) {
    console.log(event.target.attributes[1].nodeValue);
    if(event.target.attributes[1].nodeValue === "password"){
    this.setState({
      ...this.state,
      userPassword: event.target.value
    });
    } else {
      this.setState({
        ...this.state,
        userName: event.target.value
      });
    }
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.userName}
            onChange={(event) => this.handleOnChange(event)} />
          <input 
            type="text"
            name="password"
            placeholder="password"
            value={this.state.userPassword}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default SignUp;