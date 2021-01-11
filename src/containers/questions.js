import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from '../components/Question'
import { get_question } from '../actions/index'

class Questions extends Component {
  
  // componentDidMount() {
  //   this.props.get_question();
  // }


  checkAnswer(clientAnswer) {

  }
  render() {
    
    if (this.props.questionData.question) {
      console.log(this.props.questionData);
      return (
        <div>
          <ul>
            {<Question question_data={this.props.questionData.question[0].question}/>}
          </ul>
        </div>
      );
    } else {
  
      return (
        <div></div>
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
