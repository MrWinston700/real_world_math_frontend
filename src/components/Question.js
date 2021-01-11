import React, { Component }from 'react'

class Question extends Component {
// const Question = (data) => {
//   console.log(data)
//   const questionData = data.pop()
//   if(questionData !== undefined) {
//     //
//     console.log(questionData.question);
//     const question = questionData.question
  render() {
    console.log(this.props.question_data);
    const my_question = this.props.question_data
    return (

      <div>
        <h1>Topic: </h1>
        <h2>{my_question.read_me}</h2>
        <ol>
            <li>human #1</li>
            <li>human #2</li>
            <li>they didn't make it</li>
            <li>all of the above</li>
        </ol>
      </div>
    );
  }
  
};

export default Question;

//create a functional component for tags
