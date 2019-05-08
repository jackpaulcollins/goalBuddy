import { initialState } from '../constants/initialState';
import constants from '../constants/ActionTypes';
const {types} = constants;

export function postReducer(state = initialState, action){
  switch (action.type){
  case types.NEW_POST:
    return
      userPosts: 'Test'
  case types.TEST_FUNCTION:
    alert('success')
  default:
    return state;
  }
}
