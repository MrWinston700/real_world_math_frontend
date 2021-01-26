import React, { Component } from 'react';
import { connect } from 'react-redux';
import { store_comment } from '../actions/index'

class CommentInput extends Component {

  state = {
    message: ''
  }

  handleOnChange(event) {
    this.setState({
      message: event.target.value,
    });
  }

  checkForAUser() {
    if (this.props.user && this.props.question) {
      return true
    } else {
      return false
    }
  }

  handleOnSubmit(event) {
    event.preventDefault();
    //this will need a connect to work. need to check user state for a user to tie the comment with the question and user
    // something like below but it will be a dispatch to a post request
    //this.props.addRestaurant(this.state.text);

    this.props.store_comment(this.state.message, this.props.user, this.props.question );
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

const mapStateToProps = state => {
  // the if statement is a temporary fix for not recieving a user yet.
  if (state.registration.user !== undefined) {
    
  
    return {
      user: state.registration.user.user.id,
      question: state.question.question[0].question.id
    }
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    store_comment: (message, user_id, question_id) => dispatch(store_comment(message, user_id, question_id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentInput)