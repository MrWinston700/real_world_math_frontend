import React, { Component } from 'react';
import CommentInput from '../components/CommentInput'
import Comments from  '../components/Comments'
import { connect } from 'react-redux';
class CommentsContainer extends Component {

    saveAComment(data){
        //soso
    }
    render() {
        console.log("I'm in comments container")
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
      return {
        comments: state.question.question[0].comments
      }
    }
    
    const mapDispatchToProps = dispatch => ({
      addReview: review => dispatch({ type: "ADD_REVIEW", review }),
      deleteReview: id => dispatch({ type: "DELETE_REVIEW", id })
    })
    
    export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)