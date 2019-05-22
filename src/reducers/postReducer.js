import { initialPostState } from '../constants/initialState';
import c from './../constants';


export const postReducer = (state = initialPostState, action) => {
  switch (action.type){
  case c.CREATE_POST:
    console.log('created post', action.post)
    return state;
  case c.NEW_LIKE:
    let idToSearchFor = action.id;
    let newLikeState = state.slice();
    let foundPost = newLikeState.find(x=>x.id===idToSearchFor);
    foundPost.likes ++;
    return newLikeState;
  default:
    return state;
  }
}
