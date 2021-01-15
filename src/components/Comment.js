import React, { Component } from 'react';

class Comment extends Component {

  render() {
    return (
      <div>
        <li>
          {this.props.message}
        </li>
      </div>
    );
  }

};

export default Comment;
