import { initialState } from '../constants/initialState';
import c from './../constants';


export function postReducer(state = initialState, action){
  switch (action.type){
  case c.NEW_POST:
    let newState = state.slice();
    newState.push(action.post)
      return newState;
  case c.NEW_LIKE:
    console.log('reducer', action.id)
    let idToSearchFor = action.id
    let newLikeState = state.slice();
    let foundPost = newLikeState.find(x=>x.id===idToSearchFor);
    foundPost.likes ++;
      return newLikeState
    

    
  default:
    return state;
  }
}
