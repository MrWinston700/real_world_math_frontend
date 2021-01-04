//this will handle sign in sign up sign out
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Registration extends Component {

  render() {

    let books = this.props.books.map(book => <li key={book.id}>{book.title} by {book.authorName}</li>);

    return (
      <div>
        <ul>
          {books}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Registration);
