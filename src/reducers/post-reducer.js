import { initialState } from '../constants/initial-state';

export function postReducer(state = initialState, action){
  switch (action.type){
  case 'POST':
    return{
      userPosts: 'Test'
    };
  default:
    return state;
  }
}
