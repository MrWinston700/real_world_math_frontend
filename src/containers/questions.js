import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from '../components/Question'
import { get_question } from '../actions/index'

class Questions extends Component {
  
  // componentDidMount() {
  //   this.props.get_question();
  // }


  checkAnswer = data => {
    console.log(data);
    const answer = this.props.questionData.question[0].question.answer
    if (data === answer) {
      
    } else {

    }
  }
  render() {
    
    if (this.props.questionData.question) {
      console.log(this.props.questionData);
      return (
        <div>
          <ul>
            {<Question question_data={this.props.questionData.question[0].question} checkAnswer={this.checkAnswer}/>}
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
  return { questionData: state.question }
}
const mapDispatchToProps = dispatch => {
  return {
    get_question: () => dispatch(get_question())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
