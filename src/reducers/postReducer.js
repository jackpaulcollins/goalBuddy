import { initialPostState } from '../constants/initialState';
import c from './../constants';


export const postReducer = (state = initialPostState, action) => {
  switch (action.type){
  case c.CREATE_POST:
    return state;
  case c.NEW_LIKE:
    return state;
  default:
    return state;
  }
}
