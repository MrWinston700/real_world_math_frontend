import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {
  renderomments = () => this.props.comments.map(comment => <Comment key={comment.id} message={comment.message} user={comment.user}/>)

  render() {
    return (
      <ul>
      {this.renderComments()}
      </ul>
    );
  }
};

export default Comments;