import swal from 'sweetalert';
export const sign_in = (userData) => {
  return (dispatch) => {
    dispatch({ type: 'SIGN_IN', user: userData })
    }
  }

  export const sign_up = (userData) => {
    console.log("hitting action new user")
    return (dispatch) => {
        dispatch({ type: 'ADD_NEW_USER', user: userData })
    }
  }

// not a functional code as of yet. medium priority
export const get_current_user = (userData) => {
  console.log("hitting action new user")
  return (dispatch) => {
    dispatch({ type: 'SET_CURRENT_USER', user: userData })
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

  export const log_out = () => {
    return (dispatch) => {
      console.log("made it here log out");
        dispatch({ type: 'RESET_USER', user: {} })
      }
    }



  export const store_comment = (message, user_id, question_id) => {
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        'message': `${message}`,
        'user_id': `${user_id}`,
        'question_id': `${question_id}`
      })
    };
    return (dispatch) => {
      console.log("made it here store comment");

      fetch('http://localhost:3001/comments', configObj).then(response => {
        return response.json()
      }).then(responseJSON => {console.log(responseJSON);
        if (responseJSON.question) {
          swal("Comment saved");
          dispatch({ type: 'RECIEVE_COMMENTS', question: responseJSON })
        }
        })
      }
    }