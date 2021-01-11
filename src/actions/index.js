export const sign_in = () => {
    return (dispatch) => {
        console.log("made it here sign in");
      fetch('http://localhost:3001/session').then(response => {
        return response.json()
      }).then(responseJSON => {console.log(responseJSON);
        dispatch({ type: 'SIGN_IN', cats: responseJSON.images })
      })
    }
  }

  export const sign_up = () => {
    return (dispatch) => {
        console.log("made it here sign_up");
      fetch('http://localhost:3001/session').then(response => {
        return response.json()
      }).then(responseJSON => {console.log(responseJSON);
        dispatch({ type: 'SIGN_UP', cats: responseJSON.images })
      })
    }
  }

export const get_question = () => {
  return (dispatch) => {
    console.log("made it here get question");
    fetch('http://localhost:3001/random_question').then(response => {
      return response.json()
    }).then(responseJSON => {console.log(responseJSON);
      dispatch({ type: 'GET_A_QUESTION', question: responseJSON })
      })
    }
  }