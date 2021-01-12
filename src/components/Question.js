import React, { Component }from 'react'

class Question extends Component {
// const Question = (data) => {
//   console.log(data)
//   const questionData = data.pop()
//   if(questionData !== undefined) {
//     //
//     console.log(questionData.question);
//     const question = questionData.question

constructor(props) {
  super(props);
}
  render() {
    console.log(this.props.question_data);
    const my_question = this.props.question_data
    return (

      <div>
        <h1>Topic: </h1>
        <h2>{my_question.read_me}</h2>
            <button onClick ={() => this.props.checkAnswer(my_question.multi_answers[0])} >{my_question.multi_answers[0]}</button>
            <button onClick ={() => this.props.checkAnswer(my_question.multi_answers[1])}>{my_question.multi_answers[1]}</button>
            <button onClick ={() => this.props.checkAnswer(my_question.multi_answers[2])}>{my_question.multi_answers[2]}</button>
            <button onClick ={() => this.props.checkAnswer(my_question.multi_answers[3])}>{my_question.multi_answers[3]}</button>
      </div>
    );
  }
  
};

export default Question;

//create a functional component for tags
