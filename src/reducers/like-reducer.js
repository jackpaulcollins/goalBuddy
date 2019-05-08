import { initialState } from '../constants/initial-state';

export function likeReducer(state = initialState, action ){
  switch (action.type) {
  case 'LIKE':
    return {
      likes: state.likes  + 1
    };
  default:
    return state;
  }
}
