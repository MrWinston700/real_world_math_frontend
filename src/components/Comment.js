import React, { Component } from 'react';

class Comment extends Component {

  render() {
    const { comment } = this.props;

    return (
      <div>
        <li>
          {comment.message}
        </li>
      </div>
    );
  }

};

export default Review;
