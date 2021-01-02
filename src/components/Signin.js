import React, { Component } from 'react';

class SignIn extends Component {

  state = {
    text: ''
  }

  handleOnChange(event) {
    console.log(event);
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
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

export default SignIn;