import React, { Component }from 'react'

class Home extends Component {

  state = {
    quote: "",
    author: ""
  }

  componentDidMount() {
   this.getQoute();
  }

  getQoute() {
    let quoteData = ""
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const info = data[Math.floor(Math.random() * data.length)]
      console.log(info)
      quoteData = info
      return quoteData
      
      

      
    }).then((quoteData) => {
      console.log(quoteData)
      this.setState({quote: quoteData.text, author: quoteData.author})})
    
  }

  render() {
    return (
      <div id="quote">
        {this.state.quote}
        - {this.state.author}
      </div>
      
    )
  }

}

export default Home;
