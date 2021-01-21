import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from '../components/Question'
import { get_question } from '../actions/index'
import  result  from '../components/result'
import CommentsContainer from './CommentsContainer'
class QuestionContainer extends Component {
  

  checkAnswer = userInput => {
    const answer = this.props.questionData.question[0].question.answer
    if (userInput === answer) {
      result(true)
    } else {
      result(false)
    }
  }
  render() {
    // temporary fix for initial empty state recieved
    if (this.props.questionData.question) {
      console.log(this.props.questionData);
      console.log(this.props.state);
      return (
        <div>
          <ul>
            {<Question question_data={this.props.questionData.question[0].question} checkAnswer={this.checkAnswer}/>}
            {< CommentsContainer/>}
          </ul>
        </div>
      );
    } else {
  
      return (
        <div>Loading...</div>
      )
    }

  }
};

const mapStateToProps = state => {
  console.log(state)
  return { questionData: state.question, state: state }
}
const mapDispatchToProps = dispatch => {
  return {
    get_question: () => dispatch(get_question())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);
