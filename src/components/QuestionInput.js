import React, { Component } from 'react';

class QuestionInput extends Component {

  state = {
    message: ''
  }

  handleOnChange(event) {
    this.setState({
      message: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    // something like below but it will be a dispatch to a post request
    //this.props.addRestaurant(this.state.text);
    this.setState({
      message: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.message}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default QuestionInput;