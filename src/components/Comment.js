import React, { Component } from 'react';

class Comment extends Component {
  
  state = {likes: false};

  

  putlike()  {
    if (this.state.likes)
    return (
      <div id = "like"> <span>&#60;3</span></div>
    )
  }

  toggleLike() {
    if (this.state.likes === false) {
      this.setState({likes: true})
    } else {
      this.setState({likes: false})
    }
  }

  //  myFunction() {
  //   var x = document.getElementById("myDIV");
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  // } 

  render() {
    
    return (
      <div>
        <p>user {this.props.user}: {this.props.message}</p>
        <button onClick={() => this.toggleLike()}>like</button>
        {this.putlike()}
      </div> 
    );
  }

};

export default Comment;
