import React, { Component } from 'react';

class SignUp extends Component {

  state = {
    text: ''
  }

  handleOnChange(event) {
    console.log(event.target.value);
    this.setState({
      name: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log(this.state.name)
    
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
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input 
            type="text"
            name="password"
            placeholder="password"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default SignUp;