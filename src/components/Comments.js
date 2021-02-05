import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {
  renderComments = () => this.props.comments.map(comment => <Comment key={comment.id} message={comment.message} user={comment.user_id}/>)

  render() {
    return (
      <div id="content">
      <div id="comments">
      {this.renderComments()}
      </div>
      </div>
    );
  }
};

export default Comments;