export const sign_in = () => {
    return (dispatch) => {
        console.log("made it here");
      dispatch({ type: 'LOADING_CATS'})
      fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
        return response.json()
      }).then(responseJSON => {console.log(responseJSON);
        dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
      })
    }
  }