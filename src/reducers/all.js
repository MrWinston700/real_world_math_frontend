import { combineReducers } from "redux";
     
const rootReducer = combineReducers({
  registration: registrationReducer
  
});
 
export default rootReducer;
 
function registrationReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_NEW_USER":
      console.log("reducer file");
      return [...state, action.book];
 
    case "LOG_IN":
      idx = state.findIndex(book => book.id  === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
 
    default:
      return state;
  }
}
 
function authorsReducer(state = [], action) {
  
}