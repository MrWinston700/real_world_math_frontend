import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {
  debugger
  renderComments = () => this.props.comments.map(comment => <Comment key={comment.id} message={comment.message}/>)

  render() {
    return (
      <ul>
      {this.renderComments()}
      </ul>
    );
  }
};

export default Comments;