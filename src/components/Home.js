import React, { Component }from 'react'
import Dashboard from './Dashboard'
import { connect } from 'react-redux';

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
      console.log("still hit this though")
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

        <Dashboard loggedInStatus={this.props.loggedInStatus} user={this.props.user}/>
      </div>
      
      
    )
  }

}

const mapStateToProps = state => {
  console.log(state);
  debugger
  if (state.registration.user && state.registration.user.user !== undefined) {
    return {
      user: state.registration.user.user.email, loggedInStatus: state.registration.loggedInStatus
    }
  } else {
    return {
      user: "no user Logged in", loggedInStatus: state.registration.loggedInStatus
    }
  }
}

export default connect(mapStateToProps)(Home);
