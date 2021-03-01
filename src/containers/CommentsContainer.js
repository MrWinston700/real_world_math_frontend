import React, { Component } from 'react';
import CommentInput from '../components/CommentInput'
import Comments from  '../components/Comments'
import { connect } from 'react-redux';
class CommentsContainer extends Component {


  componentDidMount() {
    console.log(this.props.user)
    if (this.props.user === undefined) {
      alert("you need to be logged in to see comments");
    }
  }
    saveAComment(data){
        //soso
    }
    render() {
        // In comment input, we can pass down the question and the user and then have this container send that back to rails to create a comment for the specific question
        console.log(this.props.comments)
        return (
          <div>
            <Comments comments={this.props.comments} />
            <CommentInput/>
          </div>
        )
      }
    }
    
    const mapStateToProps = state => {
      if (state.registration.user) {
        console.log(state.question.question[0].comments)
        return {
          comments: state.question.question[0].comments,
          user: state.registration.user

        }
      } else {
        
        return state
      }
    }
    
    //this dispatch is not funtional. priority medium
    const mapDispatchToProps = dispatch => ({
      deleteComment: id => dispatch({ type: "DELETE_COMMENT", id })
    })
    
    export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)