import { initialState } from '../constants/initialState';
import c from '../constants/ActionTypes';

export function likeReducer(state = initialState, action ){
  switch (action.type) {
  case 'NEW_LIKE':
    return {
      likes: state.likes  + 1
    };
  default:
    return state;
  }
}
