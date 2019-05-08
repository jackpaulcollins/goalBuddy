import { initialState } from '../constants/initialState';
import c from './../constants';


export function postReducer(state = initialState, action){
  switch (action.type){
  case c.NEW_POST:
    console.log(action.form)
      return state;

  case c.TEST_FUNCTION:
    alert('success')
  default:
    return state;
  }
}
