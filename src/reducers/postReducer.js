import { initialPostState } from '../constants/initialState';
import c from './../constants';


export const postReducer = (state = initialPostState, action) => {
  switch (action.type){
  case c.CREATE_POST:
    console.log('created post', action.post)
    return state;
  case c.NEW_LIKE:
    console.log('new like')
    return state;
  default:
    return state;
  }
}
